import { Injectable } from '@nestjs/common';
import Stripe from 'stripe'

@Injectable()
export class StripeService {
  stripe: Stripe;
  constructor() {
    this.stripe = new Stripe('sk_test_4eC39HqLyjWDarjtT1zdp7dc', {apiVersion: '2020-08-27'});
  }
}
