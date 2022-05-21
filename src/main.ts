import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { MessagesModule } from './messages/messages.module';

async function bootstrap() {
  const app = await NestFactory.create(MessagesModule);
  //nest global validation
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3333);
}
bootstrap();
