import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Size extends Model {
  @Column
  name: string;
}
