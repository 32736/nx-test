import { Module } from '@nestjs/common';
import { OwnersModule } from '../owners/owners.module';
import { ProductsOwnerResolver } from './products-owner.resolver';
import { ProductsResolver } from './products.resolver';
import { ProductsService } from './products.service';

@Module({
  imports: [OwnersModule],
  providers: [ProductsService, ProductsResolver, ProductsOwnerResolver],
})
export class ProductsModule {}
