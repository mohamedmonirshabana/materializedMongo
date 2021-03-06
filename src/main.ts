import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle("Souqcome Example")
    .setDescription("example for Materialized")
    .setVersion('3.0')
    .addTag("items")
    .build();

  const document = SwaggerModule.createDocument(app,options);
  SwaggerModule.setup('api',app, document);

  await app.listen(3000);
}
bootstrap();
