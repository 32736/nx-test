import { Resolver } from '@nestjs/graphql';
import { ProductsService } from '../owners/owners.service';

@Resolver('Products')
export class ProductsOwnerResolver {
  constructor(private readonly productsService: ProductsService) {}
}
