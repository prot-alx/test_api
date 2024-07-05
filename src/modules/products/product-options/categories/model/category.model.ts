import {
  Table,
  Column,
  Model,
  DataType,
  BelongsToMany,
} from 'sequelize-typescript';
import { Product } from '../../../models/product.model';
import { ProductCategory } from '../../_product_categories/model/product_category.model';

@Table
export class Category extends Model<Category> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @BelongsToMany(() => Product, () => ProductCategory)
  products: Product[];
}
