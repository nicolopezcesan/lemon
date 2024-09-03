import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, RpcException, Transport } from '@nestjs/microservices'
import { HttpException, RpcExceptionFilter, ValidationPipe } from '@nestjs/common';
import { ResponseInterceptor } from './operation/infraestructure/interceptors/response.interceptor';

// TODO: pass to .env
const KAFKA_BROKER = 'localhost:29092';
const KAFKA_CONSUMER_GROUP_ID = 'operation-consumer';
const PORT = 3001;

const kafkaConfig = {
  client: {
    brokers: [KAFKA_BROKER],
  },
  consumer: {
    groupId: KAFKA_CONSUMER_GROUP_ID,
  }
};

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule, { cors: true });

  app.setGlobalPrefix('api');

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.KAFKA,
    options: kafkaConfig,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
    }),
  );

  app.useGlobalInterceptors(new ResponseInterceptor());

  await Promise.all([app.startAllMicroservices(), app.listen(PORT)]);
}

bootstrap();


