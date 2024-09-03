import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { OperationType } from '../../enums/operation-types.enum';
import { BillPaymentOperation } from '../bill-payment-operation.schema';
import { DepositOperation } from '../deposit-operation.schema';
import { SwapOperation } from '../swap-operation.schema';
import { WithdrawalOperation } from '../withdrawal-operation.schema';

type modelOperationType = Model<SwapOperation | DepositOperation | WithdrawalOperation | BillPaymentOperation>;

@Injectable()
export class OperationModelFactory {
  constructor(
    @InjectModel(SwapOperation.name) private swapOperationModel: Model<SwapOperation>,
    @InjectModel(DepositOperation.name) private depositOperationModel: Model<DepositOperation>,
    @InjectModel(WithdrawalOperation.name) private withdrawalOperationModel: Model<WithdrawalOperation>,
    @InjectModel(BillPaymentOperation.name) private billPaymentOperationModel: Model<BillPaymentOperation>,
  ) { }

  getModel(transactionType: OperationType): modelOperationType {
    switch (transactionType) {
      case OperationType.SWAP_TRANSACTION:
        return this.swapOperationModel;
      case OperationType.DEPOSIT_TRANSACTION:
        return this.depositOperationModel;
      case OperationType.WITHDRAWAL_TRANSACTION:
        return this.withdrawalOperationModel;
      case OperationType.BILL_PAYMENT_TRANSACTION:
        return this.billPaymentOperationModel;
      default:
        throw new Error(`Unrecognized transaction type: ${transactionType}`);
    }
  }
}
