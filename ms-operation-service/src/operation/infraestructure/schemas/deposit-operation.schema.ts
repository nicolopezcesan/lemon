import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { OperationBase } from "./operation/base-operation.schema";
import * as MongooseAggregatePaginate from 'mongoose-aggregate-paginate-v2';

class DepositOperationData {
  @Prop({ type: String, required: true })
  depositAddress: string;

  @Prop({ type: Number, required: true })
  amount: number;

  @Prop({ type: String, required: true })
  currency: string;
}

@Schema()
export class DepositOperation extends OperationBase {
  @Prop({ type: DepositOperationData, required: true })
  operationData: DepositOperationData;
}

export const DepositOperationSchema = SchemaFactory.createForClass(DepositOperation);

DepositOperationSchema.index({
  userId: 1,
  transactionType: 1,
  createdAt: 1,
}, { background: true });

DepositOperationSchema.plugin(MongooseAggregatePaginate);