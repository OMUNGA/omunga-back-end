import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { PrismaClientExceptionFilter } from 'nestjs-prisma';
import helmet from 'helmet';
import { RateLimitExceptionFilter } from 'shared/exceptions/rateLimitExceptionFilter.filter';
import { GraphqlExceptionFilter } from 'shared/exceptions/graphqlExceptionFilter.filter';
import { HttpErrorFilter } from 'shared/exceptions/httpErrorFilter.filter';
import { HttpExceptionFilter } from './errors/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // ...

  app.enableCors({
    origin: '*',
    credentials: true,
  });

  app.use(
    helmet({
      crossOriginEmbedderPolicy: false,
      contentSecurityPolicy: {
        directives: {
          imgSrc: [
            `'self'`,
            'data:',
            'apollo-server-landing-page.cdn.apollographql.com',
          ],
          scriptSrc: [`'self'`, `https: 'unsafe-inline'`],
          manifestSrc: [
            `'self'`,
            'apollo-server-landing-page.cdn.apollographql.com',
          ],
          frameSrc: [`'self'`, 'sandbox.embed.apollographql.com'],
        },
      },
    }),
  );

  // app.useGlobalPipes(
  //   new ValidationPipe({
  //     transform: true,
  //     forbidUnknownValues: true,
  //   })
  // );

  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new PrismaClientExceptionFilter(httpAdapter));
  // app.useGlobalFilters(new RateLimitExceptionFilter());
  // app.useGlobalFilters(new HttpErrorFilter());
  // app.useGlobalFilters(new GraphqlExceptionFilter());
  // app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalFilters(new PrismaClientExceptionFilter());

  await app.listen(8000);
}
bootstrap();
