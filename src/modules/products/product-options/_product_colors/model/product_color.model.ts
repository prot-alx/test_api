import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class ProductColor extends Model {
  @Column
  product_id: number;

  @Column
  color_id: number;
}
