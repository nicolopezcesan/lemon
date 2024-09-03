import { Inject, Injectable } from '@nestjs/common';
import { OperationRepository } from '../repositories/operation.repository';
import { createOperationDto } from '../dtos/create-operation/create-operation.dto';
import { getBillPaymentOperationFilterDto } from '../dtos/get-bill-payment-operation/get-bill-payment-operation-filter.dto';
import { AggregatePaginateResult } from 'mongoose';
import { BillPaymentOperation } from '../schemas/bill-payment-operation.schema';
import { OperationType } from '../enums/operation-types.enum';
import { CACHE_MANAGER, Cache } from '@nestjs/cache-manager';

@Injectable()
export class OperationService {
  private prefixCacheKeyPattern: string;

  constructor(
    private readonly operationRepository: OperationRepository,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {
    this.prefixCacheKeyPattern = 'bill_payment_operations';
  }

  async createOperation(createOperationDto: createOperationDto): Promise<void> {
    await this.operationRepository.createOperation(createOperationDto);

    if (createOperationDto.transactionType === OperationType.BILL_PAYMENT_TRANSACTION) {
      await this.invalidateCacheByFilters(createOperationDto);
    }
  }

  async getBillPaymentOperations(
    filters: getBillPaymentOperationFilterDto
  ): Promise<AggregatePaginateResult<BillPaymentOperation>> {
    const cacheData = await this.getCachedData(filters);

    if (cacheData) {
      return cacheData;
    }
    
    const operations = await this.operationRepository.getBillPaymentOperations(filters);
    await this.setCacheData(filters, operations);
    return operations;
  }

  private async getCachedData(filters: getBillPaymentOperationFilterDto): Promise<any> {
    const cacheKey = this.getCacheKey(filters);
    const cachedData = await this.cacheManager.get(cacheKey);

    if (cachedData) {
      return cachedData;
    }
  }

  private async setCacheData(
    filters: getBillPaymentOperationFilterDto,
    data: AggregatePaginateResult<BillPaymentOperation>
  ): Promise<any> {
    const cacheKey = this.getCacheKey(filters);
    await this.cacheManager.set(cacheKey, data);
  }

  private getCacheKey({ userId, accountServiceId, limit, page }: getBillPaymentOperationFilterDto): string {
    const key = `${this.prefixCacheKeyPattern}_${userId}_${accountServiceId}:${limit}_${page}`;
    return key;
  }

  private async invalidateCacheByFilters(operation: createOperationDto): Promise<void> {
    // @ts-ignore
    const { userId, data: { accountServiceId } } = operation;

    const keyPattern = `${this.prefixCacheKeyPattern}_${userId}_${accountServiceId}*`;
    const keysToInvalidate = await this.cacheManager.store.keys(keyPattern);

    await Promise.all(keysToInvalidate.map((key: string) => {
      return this.cacheManager.del(key);
    }));
  }
}
