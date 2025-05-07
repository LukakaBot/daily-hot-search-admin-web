import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';
import { TransformInterceptor } from './interceptor/transform.interceptor';
import { HttpExceptionFilter } from './filters/http-execption.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalInterceptors(new TransformInterceptor());
  app.useGlobalFilters(new HttpExceptionFilter());

  const config = app.get(ConfigService);
  app.setGlobalPrefix(config.get<string>('app.prefix')!);
  app.enableCors(config.get('cors'));

  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
