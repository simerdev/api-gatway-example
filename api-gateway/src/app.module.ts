import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { GatewayController } from './gateway/gateway.controller';
import { GatewayService } from './gateway/gateway.service';
import { HttpModule } from '@nestjs/axios';
import { CorrelationIdMiddleware } from './middleware/correlation-id.middleware';

@Module({
  imports: [HttpModule],
  controllers: [GatewayController],
  providers: [GatewayService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CorrelationIdMiddleware).forRoutes('*');
  }
}
