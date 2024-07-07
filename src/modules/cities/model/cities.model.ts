// location/cities/models/city.model.ts
import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
  HasMany,
} from 'sequelize-typescript';
import { Country } from '../../countries/model/countries.model';
import { User } from '../../users/models/user.model';

@Table
export class City extends Model<City> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @ForeignKey(() => Country)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  country_id: number;

  @BelongsTo(() => Country)
  country: Country;

  @HasMany(() => User)
  users: User[];
}
