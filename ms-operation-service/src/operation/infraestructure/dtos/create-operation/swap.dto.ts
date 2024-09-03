import { IsString, IsNumber } from "class-validator";

export class SwapOperationDto {
  @IsString()
  amount: string;

  @IsString()
  baseCoin: string;

  @IsString()
  quoteCoin: string;

  @IsNumber({ maxDecimalPlaces: 10 })
  fee: number;
};
