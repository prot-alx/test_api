import { Injectable, NotFoundException } from '@nestjs/common';
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
    createProductInWishlistDTO: CreateProductInWishlistDTO,
  ): Promise<ProductInWishlist> {
    return await this.productInWishlistModel.create(createProductInWishlistDTO);
  }

  async deleteProductInWishlist(id: number): Promise<void> {
    const productInWishlist = await this.productInWishlistModel.findByPk(id);
    if (!productInWishlist) {
      throw new NotFoundException(`ProductInWishlist with ID ${id} not found`);
    }
    await productInWishlist.destroy();
  }

  async findProductInWishlistById(id: number): Promise<ProductInWishlist> {
    const productInWishlist = await this.productInWishlistModel.findByPk(id);
    if (!productInWishlist) {
      throw new NotFoundException(`ProductInWishlist with ID ${id} not found`);
    }
    return productInWishlist;
  }

  async findAllProductsInWishlist(): Promise<ProductInWishlist[]> {
    return await this.productInWishlistModel.findAll();
  }
}
