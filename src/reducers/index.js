import { combineReducers } from 'redux';
import products from './products';
import cart from './cart';
import message from './message';

const appReduers = combineReducers({
    products,
    cart,
    message
});

export default appReduers;