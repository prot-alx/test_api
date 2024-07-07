import {
  Table,
  Column,
  Model,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { User } from '../../users/models/user.model';
import { Review } from '../../reviews/model/reviews.model';

@Table
export class ReviewLike extends Model<ReviewLike> {
  @ForeignKey(() => User)
  @Column
  user_id: number;

  @BelongsTo(() => User)
  user: User;

  @ForeignKey(() => Review)
  @Column
  review_id: number;

  @BelongsTo(() => Review)
  review: Review;

  @Column
  like: boolean;
}
