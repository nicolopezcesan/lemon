import { Prop } from "@nestjs/mongoose";
import { OperationType } from "../../enums/operation-types.enum";

export class OperationBase {
  @Prop({ required: true })
  transactionId: string;

  @Prop({ type: String, enum: OperationType })
  transactionType: OperationType;

  @Prop({ required: true })
  userId: string;

  @Prop({ required: true })
  status: string;

  @Prop({ required: true })
  createdAt: Date;
}