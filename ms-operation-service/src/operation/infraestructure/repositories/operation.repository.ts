import { BadRequestException, Injectable } from '@nestjs/common';
import { OperationModelFactory } from '../schemas/operation/factory-operation-model';
import { createOperationDto } from '../dtos/create-operation/create-operation.dto';
import { InjectModel } from '@nestjs/mongoose';
import { AggregatePaginateModel, AggregatePaginateResult } from 'mongoose';
import { BillPaymentOperation } from '../schemas/bill-payment-operation.schema';
import { getBillPaymentOperationFilterDto } from '../dtos/get-bill-payment-operation/get-bill-payment-operation-filter.dto';

@Injectable()
export class OperationRepository {
  constructor(
    private readonly operationModelFactory: OperationModelFactory,
    @InjectModel(BillPaymentOperation.name)
    private billPaymentOperationModel: AggregatePaginateModel<BillPaymentOperation>,
  ) { }

  async createOperation(operation: createOperationDto): Promise<void> {
    try {
      const { transactionId, transactionType, userId, status, createdAt, data } = operation;

      const model = this.operationModelFactory.getModel(transactionType);
      const newOperation = new model({
        transactionId,
        transactionType,
        userId,
        status,
        createdAt,
        operationData: data,
      });

      await newOperation.save();
    } catch (error) {
      console.warn('[Error trying to create operation]', error.message);
      // throw new BadRequestException('[Error trying to create operation]', error.message);
    }
  }

  async getBillPaymentOperations(
    filters: getBillPaymentOperationFilterDto
  ): Promise<AggregatePaginateResult<BillPaymentOperation>> {
    try {
      const { transactionType, userId, accountServiceId, limit, page } = filters;

      const customLabels = {
        docs: 'operations',
        totalDocs: 'totalItems',
      };

      const options = {
        limit,
        page,
        customLabels
      };

      const aggregationQuery = [
        {
          $match: {
            userId,
            transactionType,
            "operationData.accountServiceId": accountServiceId,
          }
        },
      ];

      const aggregate = this.billPaymentOperationModel.aggregate(aggregationQuery);
      return await this.billPaymentOperationModel.aggregatePaginate(aggregate, options);
    } catch (error) {
      throw new BadRequestException('[Error trying to get bill payment transactions]', error.message);
    }
  }

}
