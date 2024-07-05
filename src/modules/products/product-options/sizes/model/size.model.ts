import {
  Table,
  Column,
  Model,
  DataType,
  BelongsToMany,
} from 'sequelize-typescript';
import { Product } from '../../../models/product.model';
import { ProductSize } from '../../_product_sizes/model/product_size.model';

@Table
export class Size extends Model<Size> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @BelongsToMany(() => Product, () => ProductSize)
  products: Product[];
}
