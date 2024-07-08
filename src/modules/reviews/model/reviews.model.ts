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
export class Review extends Model<Review> {
  @ForeignKey(() => User)
  @Column
  user_id: number;

  @ForeignKey(() => Product)
  @Column
  product_id: number;

  @Column
  rating: number;

  @Column
  text: string;

  @Column
  created_at: Date;

  @BelongsTo(() => User)
  user: User;

  @BelongsTo(() => Product)
  product: Product;
}
