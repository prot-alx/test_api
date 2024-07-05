import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class Clothes extends Model<Clothes> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;
}
