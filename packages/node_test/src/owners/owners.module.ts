import { Module } from '@nestjs/common';
import { ProductsService } from './owners.service';

@Module({
  providers: [ProductsService],
  exports: [ProductsService],
})
export class OwnersModule {}
