import { Column, Model, Table } from "sequelize-typescript";


@Table
export class User extends Model {
  @Column
  first_name: string

  @Column
  last_name: string

  @Column
  email: string

  @Column
  password: string

  @Column
  phone: string

  @Column
  address: string

  @Column
  zip_code: string

  @Column
  country_id: number

  @Column
  city_id: number

  @Column
  role: string
}