import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ProductInCart } from '../products-in-cart/model/products-in-cart.model';
import { CreateProductInCartDTO } from './dto';

@Injectable()
export class ProductInCartService {
  constructor(
    @InjectModel(ProductInCart)
    private readonly productInCartModel: typeof ProductInCart,
  ) {}

  async createProductInCart(userId: number, dto: CreateProductInCartDTO) {
    return this.productInCartModel.create({ ...dto, user_id: userId });
  }

  async findUserCart(userId: number) {
    return this.productInCartModel.findAll({ where: { user_id: userId } });
  }

  async removeProductFromCart(userId: number, productId: number) {
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
