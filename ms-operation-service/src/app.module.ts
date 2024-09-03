import { Module } from '@nestjs/common';
import { OperationModule } from './operation/operation.module';
import { CacheModule } from '@nestjs/cache-manager';
import * as redisStore from 'cache-manager-redis-store';


const REDIS_HOST = 'localhost';
const REDIS_PORT = 6379;

@Module({
  imports: [
    OperationModule,
    CacheModule.register({
      isGlobal: true,
      store: redisStore,
      host: REDIS_HOST,
      port: REDIS_PORT,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
