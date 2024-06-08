import { type INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export const setupSwagger = (app: INestApplication) => {
  const config = new DocumentBuilder()
  .setTitle('Agenda Ágil')
  .setDescription('API para a aplicação Agenda Ágil, organizado pelo programa voluntário Pipoca Ágil.')
  .setVersion('1.0')
  .addTag('agenda', 'agil')
  .build();
  
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
};
