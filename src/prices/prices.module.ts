import { Module } from '@nestjs/common';
import { PricesService } from './prices.service';
import { PricesController } from './prices.controller';
import { StripeService } from 'src/services/stripe/stripe.service';

@Module({
  controllers: [PricesController],
  providers: [PricesService, StripeService]
})
export class PricesModule {}
