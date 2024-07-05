import {
  Table,
  Column,
  Model,
  DataType,
  BelongsToMany,
} from 'sequelize-typescript';
import { ProductColor } from '../../_product_colors/model/product_color.model';
import { Product } from '../../../models/product.model';

@Table
export class Color extends Model<Color> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  colorCode: string;

  @BelongsToMany(() => Product, () => ProductColor)
  products: Product[];
}
