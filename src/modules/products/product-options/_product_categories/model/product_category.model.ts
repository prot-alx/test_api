import { Table, Model, ForeignKey, Column } from 'sequelize-typescript';
import { Product } from '../../../models/product.model';
import { Category } from '../../categories/model/category.model';

@Table
export class ProductCategory extends Model<ProductCategory> {
  @ForeignKey(() => Product)
  @Column
  productId: number;

  @ForeignKey(() => Category)
  @Column
  categoryId: number;
}
