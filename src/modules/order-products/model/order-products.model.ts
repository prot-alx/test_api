import {
  Table,
  Column,
  Model,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Order } from '../../orders/model/orders.model';
import { Product } from '../../products/models/product.model';

@Table
export class OrderProduct extends Model<OrderProduct> {
  @ForeignKey(() => Order)
  @Column
  order_id: number;

  @BelongsTo(() => Order)
  order: Order;

  @ForeignKey(() => Product)
  @Column
  product_id: number;

  @BelongsTo(() => Product)
  product: Product;

  @Column
  quantity: number;
}
