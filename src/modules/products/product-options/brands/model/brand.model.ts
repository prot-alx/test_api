import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class Brand extends Model<Brand> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;
}
