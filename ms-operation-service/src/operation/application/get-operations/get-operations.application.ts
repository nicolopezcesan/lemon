import { Controller } from '@nestjs/common';
import { getBillPaymentOperationFilterDto } from 'src/operation/infraestructure/dtos/get-bill-payment-operation/get-bill-payment-operation-filter.dto';
import { OperationService } from 'src/operation/infraestructure/services/operation.service';

@Controller()
export class GetOperationsApp {
  constructor(
    private readonly operationService: OperationService
  ) { }

  async execute(filters: getBillPaymentOperationFilterDto): Promise<any> {
    return await this.operationService.getBillPaymentOperations(filters);
  }
}