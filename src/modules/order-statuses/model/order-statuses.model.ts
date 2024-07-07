import { Table, Column, Model, HasMany } from 'sequelize-typescript';
import { Order } from '../../orders/model/orders.model';

@Table
export class OrderStatus extends Model<OrderStatus> {
  @Column
  name: string;

  @HasMany(() => Order)
  orders: Order[];
}
