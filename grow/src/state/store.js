import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import userReducer from './user';
import shoppingCartReducer from './shoppingCart';
import itemCartReducer from './itemCart';

const store = configureStore({
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
  reducer: {
    user: userReducer,
    shoppingCart: shoppingCartReducer,
    itemCarts: itemCartReducer,
  },
});

export default store;
