import { IsString, IsNumber, IsEnum, IsNotEmpty, IsOptional } from 'class-validator';
import { OperationType } from '../../enums/operation-types.enum';
import { Type } from 'class-transformer';

export class getBillPaymentOperationFilterDto {
  @IsNotEmpty()
  @IsEnum(OperationType)
  transactionType: OperationType;

  @IsNotEmpty()
  @IsString()
  userId: string;

  @IsNotEmpty()
  @IsString()
  @Type(() => String)
  accountServiceId: number;

  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  limit?: number;

  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  page?: number;
}