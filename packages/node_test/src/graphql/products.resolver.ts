import { Args, Query, Resolver } from '@nestjs/graphql';

import { ProductsService } from './products.service';

@Resolver('Products')
export class ProductsResolver {
  constructor(private readonly productsService: ProductsService) {}

  @Query()
  async products(@Args('active') active: boolean) {
    return await this.productsService.findAll(active);
  }
}
