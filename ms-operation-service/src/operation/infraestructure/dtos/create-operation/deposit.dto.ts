import { IsEthereumAddress, IsNumber, IsString } from "class-validator";

export class DepositOperationDto {
  @IsEthereumAddress()
  depositAddress: string;

  @IsNumber()
  amount: number;

  @IsString()
  currency: string;
};