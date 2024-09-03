import { IsNumber, IsString } from "class-validator";

export class BillPaymentOperationDto {
  @IsString()
  companyName: string;

  @IsString()
  accountServiceId: string;

  @IsNumber()
  amount: number;

  @IsString()
  currency: string;
};
