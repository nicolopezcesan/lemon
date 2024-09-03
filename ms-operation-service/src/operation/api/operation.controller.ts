import { Controller, Get, Query } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { createOperationDto } from '../infraestructure/dtos/create-operation/create-operation.dto';
import { getBillPaymentOperationFilterDto } from '../infraestructure/dtos/get-bill-payment-operation/get-bill-payment-operation-filter.dto';
import { CreateOperationApp } from '../application/create-operation/create-operation.application';
import { GetOperationsApp } from '../application/get-operations/get-operations.application';

@Controller('operations')
export class OperationController {
  constructor(
    private readonly createOperationApp: CreateOperationApp,
    private readonly getOperationsApp: GetOperationsApp,
  ) { }

  @MessagePattern('new-transaction')
  async createOperation(@Payload() validatedCreateOperationDto: createOperationDto): Promise<void> {
    await this.createOperationApp.execute(validatedCreateOperationDto);
  }

  @Get()
  async getOperations(@Query() filters: getBillPaymentOperationFilterDto): Promise<any> {
    return await this.getOperationsApp.execute(filters);
  }
}