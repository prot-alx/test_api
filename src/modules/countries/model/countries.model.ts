import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { City } from '../../cities/model/cities.model';
import { User } from '../../users/models/user.model';

@Table
export class Country extends Model<Country> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @HasMany(() => City)
  cities: City[];

  @HasMany(() => User)
  users: User[];
}
