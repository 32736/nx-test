import { Injectable } from '@nestjs/common';
import { Product } from '../graphql.schema';

@Injectable()
export class ProductsService {
  private readonly products: Product[] = [
    { name: 'prod A', price: 1000, active: true },
    { name: 'prod B', price: 1500, active: true },
    { name: 'prod C', price: 2000, active: false },
  ];
}
