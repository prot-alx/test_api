import { Table, Model, ForeignKey, Column } from 'sequelize-typescript';
import { Product } from '../../../models/product.model';
import { Color } from '../../colors/model/color.model';

@Table
export class ProductColor extends Model<ProductColor> {
  @ForeignKey(() => Product)
  @Column
  productId: number;

  @ForeignKey(() => Color)
  @Column
  colorId: number;
}
