import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ProductInWishlist } from './model/products-in-wishlist.model';
import { CreateProductInWishlistDTO } from './dto';

@Injectable()
export class ProductInWishlistService {
  constructor(
    @InjectModel(ProductInWishlist)
    private readonly productInWishlistModel: typeof ProductInWishlist,
  ) {}

  async createProductInWishlist(
    userId: number,
    dto: CreateProductInWishlistDTO,
  ) {
    return this.productInWishlistModel.create({ ...dto, user_id: userId });
  }

  async findUserWishlist(userId: number) {
    return this.productInWishlistModel.findAll({ where: { user_id: userId } });
  }

  async removeProductFromWishlist(userId: number, productId: number) {
    const productInWishlist = await this.productInWishlistModel.findOne({
      where: { user_id: userId, product_id: productId },
    });
    if (!productInWishlist) {
      throw new UnauthorizedException();
    }
    await productInWishlist.destroy();
    return productInWishlist;
  }
}
