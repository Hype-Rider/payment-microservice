import { Module } from '@nestjs/common';
import { PaymentMethodsService } from './payment-methods.service';
import { PaymentMethodsController } from './payment-methods.controller';
import { StripeService } from 'src/services/stripe/stripe.service';

@Module({
  controllers: [PaymentMethodsController],
  providers: [PaymentMethodsService, StripeService]
})
export class PaymentMethodsModule {}
