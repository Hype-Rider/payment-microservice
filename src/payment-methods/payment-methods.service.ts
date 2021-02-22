import { Injectable, NotImplementedException } from '@nestjs/common';
import { StripeService } from 'src/services/stripe/stripe.service';
import Stripe from 'stripe';
import { CreatePaymentMethodDto } from './dto/create-payment-method.dto';
import { UpdatePaymentMethodDto } from './dto/update-payment-method.dto';

@Injectable()
export class PaymentMethodsService {
  constructor(private readonly stripeService: StripeService) {}
  async create(createPaymentMethodDto: Stripe.PaymentMethodCreateParams) {
    // const paymentMethod = await stripe.paymentMethods.create({
    //   type: 'card',
    //   card: {
    //     number: '4242424242424242',
    //     exp_month: 2,
    //     exp_year: 2022,
    //     cvc: '314',
    //   },
    // })
    return await this.stripeService.stripe.paymentMethods.create(
      createPaymentMethodDto,
    );
  }

  async findCustomerPaymentMethods(id: string) {
    return await this.stripeService.stripe.paymentMethods.list({
      customer: id,
      type: 'card',
    });
  }

  async attachPaymentToCustomer(paymentId: string, customerId: string) {
    return await this.stripeService.stripe.paymentMethods.attach(
      paymentId,
      {customer: customerId}
    );
  }

  async findOne(id: string) {
    return await this.stripeService.stripe.paymentMethods.retrieve(id);
  }

  update(id: number, updatePaymentMethodDto: UpdatePaymentMethodDto) {
    return NotImplementedException;
  }

  remove(id: number) {
    return NotImplementedException;
  }
}
