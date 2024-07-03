import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Clothes extends Model {
  @Column
  name: string;
}
