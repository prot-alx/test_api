import {
  Table,
  Column,
  Model,
  ForeignKey,
  BelongsTo,
  HasMany,
} from 'sequelize-typescript';
import { User } from '../../users/models/user.model';
import { Product } from '../../products/models/product.model';
import { ReviewLike } from '../../review-likes/model/review-likes.model';

@Table
export class Review extends Model<Review> {
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
  rating: number;

  @Column
  text: string;

  @Column
  created_at: Date;

  @HasMany(() => ReviewLike)
  reviewLikes: ReviewLike[];
}
