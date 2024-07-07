import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ProductInCart } from './model/products-in-cart.model';
import { CreateProductInCartDTO, UpdateProductInCartDTO } from './dto';

@Injectable()
export class ProductInCartService {
  constructor(
    @InjectModel(ProductInCart)
    private readonly productInCartModel: typeof ProductInCart,
  ) {}

  async createProductInCart(
    createProductInCartDTO: CreateProductInCartDTO,
  ): Promise<ProductInCart> {
    return await this.productInCartModel.create(createProductInCartDTO);
  }

  async updateProductInCart(
    id: number,
    updateProductInCartDTO: UpdateProductInCartDTO,
  ): Promise<ProductInCart> {
    const productInCart = await this.productInCartModel.findByPk(id);
    if (!productInCart) {
      throw new NotFoundException(`ProductInCart with ID ${id} not found`);
    }
    await productInCart.update(updateProductInCartDTO);
    return productInCart.reload();
  }

  async deleteProductInCart(id: number): Promise<void> {
    const productInCart = await this.productInCartModel.findByPk(id);
    if (!productInCart) {
      throw new NotFoundException(`ProductInCart with ID ${id} not found`);
    }
    await productInCart.destroy();
  }

  async findProductInCartById(id: number): Promise<ProductInCart> {
    const productInCart = await this.productInCartModel.findByPk(id);
    if (!productInCart) {
      throw new NotFoundException(`ProductInCart with ID ${id} not found`);
    }
    return productInCart;
  }

  async findAllProductsInCart(): Promise<ProductInCart[]> {
    return await this.productInCartModel.findAll();
  }
}
