import { Module } from '@nestjs/common';
import { OperationController } from './api/operation.controller';
import { OperationService } from './infraestructure/services/operation.service';
import { MongooseModule } from '@nestjs/mongoose';
import { OperationRepository } from './infraestructure/repositories/operation.repository';
import { OperationModelFactory } from './infraestructure/schemas/operation/factory-operation-model';
import { BillPaymentOperation, BillPaymentOperationSchema } from './infraestructure/schemas/bill-payment-operation.schema';
import { DepositOperation, DepositOperationSchema } from './infraestructure/schemas/deposit-operation.schema';
import { SwapOperation, SwapOperationSchema } from './infraestructure/schemas/swap-operation.schema';
import { WithdrawalOperation, WithdrawalOperationSchema } from './infraestructure/schemas/withdrawal-operation.schema';
import { CreateOperationApp } from './application/create-operation/create-operation.application';
import { GetOperationsApp } from './application/get-operations/get-operations.application';
import { ConfigService } from '@nestjs/config';
import { CacheModule } from 'src/cache/cache.module';

const MONGO_OPERATION_COLLECTION_NAME = 'operation';

@Module({
  imports: [
    CacheModule,
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_DB_HOST'),
        dbName: configService.get<string>('MONGO_DB_NAME'),
      }),
    }),
    MongooseModule.forFeature([
      {
        name: SwapOperation.name,
        schema: SwapOperationSchema,
        collection: MONGO_OPERATION_COLLECTION_NAME
      },
      {
        name: DepositOperation.name,
        schema: DepositOperationSchema,
        collection: MONGO_OPERATION_COLLECTION_NAME
      },
      {
        name: WithdrawalOperation.name,
        schema: WithdrawalOperationSchema,
        collection: MONGO_OPERATION_COLLECTION_NAME
      },
      {
        name: BillPaymentOperation.name,
        schema: BillPaymentOperationSchema,
        collection: MONGO_OPERATION_COLLECTION_NAME
      },
    ]),
  ],
  providers: [
    // services
    OperationService,
    // repositories
    OperationRepository,
    OperationModelFactory,
    // applications
    CreateOperationApp,
    GetOperationsApp,
  ],
  controllers: [
    OperationController
  ],
})

export class OperationModule { }
