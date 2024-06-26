import { combineReducers } from 'redux';
import categoriesReducer from './categoriesReducer';
import productsReducer from './productReducer';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
  cart: cartReducer,
});

export default rootReducer;