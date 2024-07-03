import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class ProductCategory extends Model {
  @Column
  product_id: number;

  @Column
  size_id: number;
}
