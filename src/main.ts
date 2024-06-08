import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { ValidationPipe } from "@nestjs/common";
import * as cookieParser from 'cookie-parser';
import { setupSwagger } from "./docs/swagger.config";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({        
    origin: process.env.FRONTEND_URL,
    credentials: true,
  });

  app.useGlobalPipes(new ValidationPipe())
  app.use(cookieParser())

  setupSwagger(app)

  await app.listen(process.env.PORT);
}
bootstrap();
