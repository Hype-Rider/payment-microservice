import { Injectable } from '@nestjs/common';
import { StripeService } from 'src/services/stripe/stripe.service';
import Stripe from 'stripe';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@Injectable()
export class CustomersService {
  constructor(private readonly stripeService: StripeService) {}
  async create(createCustomerDto: Stripe.CustomerCreateParams) {
    return await this.stripeService.stripe.customers.create(createCustomerDto);
  }

  async findAll() {
    return await this.stripeService.stripe.customers.list({
      limit: 3,
    });
  }

  async findOne(id: string) {
    return await this.stripeService.stripe.customers.retrieve(id);
  }

  async partialUpdate(id: string, updateCustomerDto: Stripe.CustomerUpdateParams) {
    return await this.stripeService.stripe.customers.update(id, updateCustomerDto)
  }

  async remove(id: string) {
    return await this.stripeService.stripe.customers.del(id)
  }
}
