import {
  Table,
  Column,
  Model,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { User } from '../../users/models/user.model';
import { Product } from '../../products/models/product.model';

@Table
export class RecentlyViewed extends Model<RecentlyViewed> {
  @ForeignKey(() => User)
  @Column
  user_id: number;

  @BelongsTo(() => User)
  user: User;

  @ForeignKey(() => Product)
  @Column
  product_id: number;

  @BelongsTo(() => Product)
  product: Product;

  @Column
  created_at: Date;
}
