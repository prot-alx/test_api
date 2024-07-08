import { City } from './cities/model/cities.model';
import { Country } from './countries/model/countries.model';
import { OrderProduct } from './order-products/model/order-products.model';
import { OrderStatus } from './order-statuses/model/order-statuses.model';
import { Order } from './orders/model/orders.model';
import {
  Color,
  Product,
  Size,
  Category,
  ProductColor,
  ProductSize,
  ProductCategory,
  Clothes,
  Material,
  Brand,
} from './products';
import { ProductInCart } from './products-in-cart/model/products-in-cart.model';
import { ProductInWishlist } from './products-in-wishlist/model/products-in-wishlist.model';
import { RecentlyViewed } from './recently-viewed/model/recently-viewed.model';
import { ReviewLike } from './review-likes/model/review-likes.model';
import { Review } from './reviews/model/reviews.model';
import { User } from './users/models/user.model';

export const models = [
  User,
  Color,
  Product,
  Size,
  Category,
  ProductColor,
  ProductSize,
  ProductCategory,
  Clothes,
  Material,
  Brand,
  City,
  Country,
  OrderProduct,
  OrderStatus,
  Order,
  ProductInCart,
  ProductInWishlist,
  RecentlyViewed,
  ReviewLike,
  Review,
];
