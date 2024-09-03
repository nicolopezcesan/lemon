import { IsString, IsDate, IsNumber, IsEthereumAddress, IsEnum, IsObject, ValidateNested } from 'class-validator';
import { OperationType } from '../../enums/operation-types.enum';
import { OperationStatus } from '../../enums/operation-status.enum';
import { BillPaymentOperationDto } from './bill-payment.dto';
import { DepositOperationDto } from './deposit.dto';
import { SwapOperationDto } from './swap.dto';
import { WithdrawalOperationDto } from './withdrawal.dto';

export class createOperationDto {
  @IsNumber()
  transactionId: number;

  @IsEnum(OperationType)
  transactionType: OperationType;

  @IsString()
  userId: string;
  
  @IsEnum(OperationStatus)
  status: OperationStatus;

  @IsDate()
  createdAt: Date;

  @IsObject()
  data: SwapOperationDto | DepositOperationDto | WithdrawalOperationDto | BillPaymentOperationDto;
}