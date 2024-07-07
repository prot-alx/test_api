import {
  Table,
  Column,
  Model,
  ForeignKey,
  BelongsTo,
  HasMany,
} from 'sequelize-typescript';
import { User } from '../../users/models/user.model';
import { OrderProduct } from '../../order-products/model/order-products.model';
import { OrderStatus } from '../../order-statuses/model/order-statuses.model';

@Table
export class Order extends Model<Order> {
  @ForeignKey(() => User)
  @Column
  user_id: number;

  @BelongsTo(() => User)
  user: User;

  @ForeignKey(() => OrderStatus)
  @Column
  status_id: number;

  @BelongsTo(() => OrderStatus)
  status: OrderStatus;

  @HasMany(() => OrderProduct)
  orderProducts: OrderProduct[];
}
