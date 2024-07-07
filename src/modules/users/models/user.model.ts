import {
  Table,
  Column,
  Model,
  ForeignKey,
  BelongsTo,
  HasMany,
  Default,
} from 'sequelize-typescript';
import { Country } from '../../countries/model/countries.model';
import { City } from '../../cities/model/cities.model';
import { Order } from '../../orders/model/orders.model';
import { Review } from '../../reviews/model/reviews.model';
import { ReviewLike } from '../../review-likes/model/review-likes.model';
import { ProductInCart } from '../../products-in-cart/model/products-in-cart.model';
import { ProductInWishlist } from '../../products-in-wishlist/model/products-in-wishlist.model';
import { RecentlyViewed } from '../../recently-viewed/model/recently-viewed.model';

@Table
export class User extends Model<User> {
  @Column
  email: string;

  @Column
  password: string;

  @Column
  phone: string;

  @Default('Unknown')
  @Column
  first_name: string;

  @Default('Unknown')
  @Column
  last_name: string;

  @Default('Unknown')
  @Column
  address: string;

  @Default('00000')
  @Column
  zip_code: string;

  @ForeignKey(() => Country)
  @Default(1)
  @Column
  country_id: number;

  @BelongsTo(() => Country)
  country: Country;

  @ForeignKey(() => City)
  @Default(1)
  @Column
  city_id: number;

  @BelongsTo(() => City)
  city: City;

  @Default('user')
  @Column
  role: string;

  @HasMany(() => Order)
  orders: Order[];

  @HasMany(() => Review)
  reviews: Review[];

  @HasMany(() => ReviewLike)
  reviewLikes: ReviewLike[];

  @HasMany(() => ProductInCart)
  cartProducts: ProductInCart[];

  @HasMany(() => ProductInWishlist)
  wishlistProducts: ProductInWishlist[];

  @HasMany(() => RecentlyViewed)
  recentlyViewed: RecentlyViewed[];
}
