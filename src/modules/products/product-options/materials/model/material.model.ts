import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Material extends Model {
  @Column
  name: string;
}
