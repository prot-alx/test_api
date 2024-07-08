import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ProductInCart } from './model/products-in-cart.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateProductInCartDTO } from './dto';

@Injectable()
export class ProductInCartService {
  constructor(
    @InjectModel(ProductInCart)
    private readonly productInCartModel: typeof ProductInCart,
  ) {}

  async createProductInCart(
    userId: number,
    dto: CreateProductInCartDTO,
  ): Promise<ProductInCart> {
    return this.productInCartModel.create({ ...dto, user_id: userId });
  }

  async findUserCart(userId: number): Promise<ProductInCart[]> {
    return this.productInCartModel.findAll({ where: { user_id: userId } });
  }

  async removeProductFromCart(
    userId: number,
    productId: number,
  ): Promise<ProductInCart> {
    const productInCart = await this.productInCartModel.findOne({
      where: { user_id: userId, product_id: productId },
    });
    if (!productInCart) {
      throw new UnauthorizedException();
    }
    await productInCart.destroy();
    return productInCart;
  }
}
