import {
  Table,
  Column,
  Model,
  ForeignKey,
  BelongsTo,
  HasMany,
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
  first_name: string;

  @Column
  last_name: string;

  @Column
  email: string;

  @Column
  password: string;

  @Column
  phone: string;

  @Column
  address: string;

  @Column
  zip_code: string;

  @ForeignKey(() => Country)
  @Column
  country_id: number;

  @BelongsTo(() => Country)
  country: Country;

  @ForeignKey(() => City)
  @Column
  city_id: number;

  @BelongsTo(() => City)
  city: City;

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
