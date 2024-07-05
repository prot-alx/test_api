import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
  BelongsToMany,
} from 'sequelize-typescript';
import { ProductColor } from '../product-options/_product_colors/model/product_color.model';
import { Color } from '../product-options/colors/model/color.model';
import { ProductSize } from '../product-options/_product_sizes/model/product_size.model';
import { Size } from '../product-options/sizes/model/size.model';
import { ProductCategory } from '../product-options/_product_categories/model/product_category.model';
import { Category } from '../product-options/categories/model/category.model';
import { Clothes } from '../product-options/clothes/model/clothes.model';
import { Material } from '../product-options/materials/model/material.model';
import { Brand } from '../product-options/brands/model/brand.model';

@Table
export class Product extends Model<Product> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.DECIMAL,
    allowNull: false,
  })
  price: number;

  @Column({
    type: DataType.STRING,
  })
  image: string;

  @Column({
    type: DataType.FLOAT,
  })
  rating: number;

  @ForeignKey(() => Clothes)
  @Column({
    type: DataType.INTEGER,
  })
  clothesId: number;

  @ForeignKey(() => Material)
  @Column({
    type: DataType.INTEGER,
  })
  materialId: number;

  @ForeignKey(() => Brand)
  @Column({
    type: DataType.INTEGER,
  })
  brandId: number;

  @Column({
    type: DataType.BOOLEAN,
  })
  isSale: boolean;

  @Column({
    type: DataType.DECIMAL,
  })
  discount: number;

  @Column({
    type: DataType.DECIMAL,
  })
  salePrice: number;

  @BelongsTo(() => Clothes)
  clothes: Clothes;

  @BelongsTo(() => Material)
  material: Material;

  @BelongsTo(() => Brand)
  brand: Brand;

  @BelongsToMany(() => Color, () => ProductColor)
  colors: Color[];

  @BelongsToMany(() => Size, () => ProductSize)
  sizes: Size[];

  @BelongsToMany(() => Category, () => ProductCategory)
  categories: Category[];
}
