import { Module } from '@nestjs/common';
import { SubscriptionsService } from './subscriptions.service';
import { SubscriptionsController } from './subscriptions.controller';
import { StripeService } from 'src/services/stripe/stripe.service';

@Module({
  controllers: [SubscriptionsController],
  providers: [SubscriptionsService, StripeService]
})
export class SubscriptionsModule {}
