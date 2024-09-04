import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices'
import { ValidationPipe } from '@nestjs/common';
import { ResponseInterceptor } from './operation/infraestructure/interceptors/response.interceptor';
import { ConfigService } from '@nestjs/config';

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule, { cors: true });
  const configService = app.get(ConfigService)

  app.setGlobalPrefix(
    configService.get<string>('API_PREFIX')
  );

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.KAFKA,
    options: {
      client: {
        brokers: [configService.get<string>('KAFKA_BROKER')],
      },
      consumer: {
        groupId: configService.get<string>('KAFKA_CONSUMER_GROUP_ID'),
      }
    },
  });

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
    }),
  );

  app.useGlobalInterceptors(
    new ResponseInterceptor()
  );

  await Promise.all([
    app.startAllMicroservices(),
    app.listen(configService.get<number>('API_PORT')),
  ]);
}

bootstrap();


