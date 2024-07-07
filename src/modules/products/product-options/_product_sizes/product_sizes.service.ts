import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ProductSize } from './model/product_size.model';
import { CreateProductSizeDTO } from './dto';

@Injectable()
export class ProductSizeService {
  constructor(
    @InjectModel(ProductSize)
    private readonly productSizeModel: typeof ProductSize,
  ) {}

  async create(
    createProductSizeDTO: CreateProductSizeDTO,
  ): Promise<ProductSize> {
    const productSize = new ProductSize();
    productSize.productId = createProductSizeDTO.productId;
    productSize.sizeId = createProductSizeDTO.sizeId;

    return productSize.save();
  }
}
