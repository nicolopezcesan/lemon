import { IsEthereumAddress, IsNumber, IsString } from "class-validator";

export class WithdrawalOperationDto {
  @IsEthereumAddress()
  withdrawalAddress: string;

  @IsString()
  txHash: string;

  @IsNumber({ maxDecimalPlaces: 10 })
  amount: number;

  @IsNumber({ maxDecimalPlaces: 10 })
  fee: number;
};