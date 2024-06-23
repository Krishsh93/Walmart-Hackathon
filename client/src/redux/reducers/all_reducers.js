import { combineReducers } from "redux";
import { getProductsReducer } from "./get_products.reducer";
import { singleProductReducer } from "./get_single_product.reducer";
import { bagReducer } from "./bag.reducer";
import { loginReducer } from "./login.reducer";
import { addressReducer } from "./address.reducer";
import { wishlistReducer } from "./wishlist.reducer";
import { registerUserReducer } from "./register.reducer";

const allReducers = combineReducers({
  getProducts: getProductsReducer,
  singleProduct: singleProductReducer,
  bagProducts: bagReducer,
  wishlistProducts: wishlistReducer,
  login: loginReducer,
  addressDetails: addressReducer,
  newUser: registerUserReducer,
});

export { allReducers };
