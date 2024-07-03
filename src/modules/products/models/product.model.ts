import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Product extends Model {
  @Column
  name: string;

  @Column
  price: number;

  @Column
  image: string;

  @Column
  rating: number;

  @Column
  clothes_id: number;

  @Column
  material_id: number;

  @Column
  brand_id: number;

  @Column
  is_sale: string;

  @Column
  discount: number;

  @Column
  sale_price: number;
}
