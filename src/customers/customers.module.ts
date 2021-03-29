import { Module } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CustomersController } from './customers.controller';
import { StripeService } from 'src/services/stripe/stripe.service';

@Module({
  controllers: [CustomersController],
  providers: [CustomersService, StripeService]
})
export class CustomersModule {}
