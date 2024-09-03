import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { OperationBase } from "./operation/base-operation.schema";
import * as MongooseAggregatePaginate from 'mongoose-aggregate-paginate-v2';

class WithdrawalOperationData {
  @Prop({ type: String, required: true })
  withdrawalAddress: string;

  @Prop({ type: String, required: true })
  txHash: string;

  @Prop({ type: Number, required: true })
  amount: number;

  @Prop({ type: Number, required: true })
  fee: number;
}

@Schema()
export class WithdrawalOperation extends OperationBase {
  @Prop({ type: WithdrawalOperationData, required: true })
  operationData: WithdrawalOperationData;
}

export const WithdrawalOperationSchema = SchemaFactory.createForClass(WithdrawalOperation);

WithdrawalOperationSchema.index({
  userId: 1,
  transactionType: 1,
  createdAt: 1,
}, { background: true });

WithdrawalOperationSchema.plugin(MongooseAggregatePaginate);
