import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization'],        
    origin: ['https://farmegg.vercel.app', 'http://localhost:3000'],
    credentials: true,
  });

  const config = new DocumentBuilder()
  .setTitle('Agenda Ágil')
  .setDescription('API para a aplicação Agenda Ágil, organizado pelo programa voluntário Pipoca Ágil.')
  .setVersion('1.0')
  .addTag('agenda', 'agil')
  .build();
  
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT);
}
bootstrap();
