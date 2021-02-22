import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StripeService } from './services/stripe/stripe.service';
import { CustomersModule } from './customers/customers.module';
import { SubscriptionsModule } from './subscriptions/subscriptions.module';
import { PricesModule } from './prices/prices.module';
import { PaymentMethodsModule } from './payment-methods/payment-methods.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    CustomersModule,
    SubscriptionsModule,
    PricesModule,
    PaymentMethodsModule,
  ],
  controllers: [AppController],
  providers: [AppService, StripeService],
})
export class AppModule {}
