import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { OperationBase } from "./operation/base-operation.schema";
import * as MongooseAggregatePaginate from 'mongoose-aggregate-paginate-v2';

@Schema()
class BillPaymentOperationData {
  @Prop({ type: String, required: true })
  companyName: string;

  @Prop({ type: String, required: true })
  accountServiceId: string;

  @Prop({ type: Number, required: true })
  amount: number;

  @Prop({ type: String, required: true })
  currency: string;
}

@Schema()
export class BillPaymentOperation extends OperationBase {
  @Prop({ type: BillPaymentOperationData, required: true })
  operationData: BillPaymentOperationData;
}

export const BillPaymentOperationSchema = SchemaFactory.createForClass(BillPaymentOperation);

BillPaymentOperationSchema.index({
  userId: 1,
  transactionType: 1,
  createdAt: 1,
}, { background: true });

BillPaymentOperationSchema.plugin(MongooseAggregatePaginate);