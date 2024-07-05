import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class Material extends Model<Material> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;
}
