import { Module } from '@nestjs/common';
import { OperationModule } from './operation/operation.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    OperationModule,
  ],
  controllers: [],
  providers: [],
})

export class AppModule { }
