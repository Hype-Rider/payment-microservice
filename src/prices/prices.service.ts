import { Injectable, NotImplementedException } from '@nestjs/common';
import { StripeService } from 'src/services/stripe/stripe.service';
import { CreatePriceDto } from './dto/create-price.dto';
import { UpdatePriceDto } from './dto/update-price.dto';

@Injectable()
export class PricesService {
  constructor(private readonly stripeService: StripeService) {}
  create(createPriceDto: CreatePriceDto) {
    return NotImplementedException;
  }

  findAll() {
    return this.stripeService.stripe.prices.list();
  }

  findOne(id: string) {
    return this.stripeService.stripe.prices.retrieve(id);
  }

  update(id: number, updatePriceDto: UpdatePriceDto) {
    return NotImplementedException;
  }

  remove(id: number) {
    return NotImplementedException;
  }
}
