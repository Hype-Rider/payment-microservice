import { Injectable } from '@nestjs/common';
import { StripeService } from 'src/services/stripe/stripe.service';
import Stripe from 'stripe';
import { CreateSubscriptionDto } from './dto/create-subscription.dto';
import { UpdateSubscriptionDto } from './dto/update-subscription.dto';

@Injectable()
export class SubscriptionsService {
  constructor(private readonly stripeService: StripeService) {}

  async create(customerId: string, createSubscriptionDto: any) {
    return await this.stripeService.stripe.subscriptions.create({
      customer: customerId,
      items: [{ price: createSubscriptionDto.price }],
    });
  }

  async findAll() {
    return await this.stripeService.stripe.subscriptions.list();
  }

  async findOne(id: string) {
    return await this.stripeService.stripe.subscriptions.retrieve(id);
  }

  async update(
    id: string,
    updateSubscriptionDto: Stripe.SubscriptionUpdateParams,
  ) {
    return await this.stripeService.stripe.subscriptions.update(
      id,
      updateSubscriptionDto,
    );
  }

  async remove(id: string) {
    return await this.stripeService.stripe.subscriptions.del(id);
  }
}
