import { Table, Model, ForeignKey, Column } from 'sequelize-typescript';
import { Product } from '../../../models/product.model';
import { Size } from '../../sizes/model/size.model';

@Table
export class ProductSize extends Model<ProductSize> {
  @ForeignKey(() => Product)
  @Column
  productId: number;

  @ForeignKey(() => Size)
  @Column
  sizeId: number;
}
