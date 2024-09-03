import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { OperationBase } from "./operation/base-operation.schema";
import * as MongooseAggregatePaginate from 'mongoose-aggregate-paginate-v2';

class SwapOperationData {
  @Prop({ type: Number, required: true })
  amount: number;

  @Prop({ type: String, required: true })
  baseCoin: string;

  @Prop({ type: String, required: true })
  quoteCoin: string;

  @Prop({ type: Number, required: true })
  fee: number;
}

@Schema()
export class SwapOperation extends OperationBase {
  @Prop({ type: SwapOperationData, required: true })
  operationData: SwapOperationData;
}

export const SwapOperationSchema = SchemaFactory.createForClass(SwapOperation);

SwapOperationSchema.index({
  userId: 1,
  transactionType: 1,
  createdAt: 1,
}, { background: true });

SwapOperationSchema.plugin(MongooseAggregatePaginate);