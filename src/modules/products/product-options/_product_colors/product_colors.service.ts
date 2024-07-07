import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ProductColor } from './model/product_color.model';
import { CreateProductColorDTO } from './dto';

@Injectable()
export class ProductColorService {
  constructor(
    @InjectModel(ProductColor)
    private readonly productColorModel: typeof ProductColor,
  ) {}

  async create(
    createProductColorDTO: CreateProductColorDTO,
  ): Promise<ProductColor> {
    const productColor = new ProductColor();
    productColor.productId = createProductColorDTO.productId;
    productColor.colorId = createProductColorDTO.colorId;

    return productColor.save();
  }
}
