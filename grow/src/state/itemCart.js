import { createReducer, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// export const addToShoppingCart = createAsyncThunk(
//   'ADD_TO_CART',
//   (data, thunkAPI) => {
//     const { user } = thunkAPI.getState();
//     return axios.post(`/api/add/objectId=${data.id}`, data).then(res => res);
//   }
// );

// export const removeFromShoppingCart = createAsyncThunk(
//   'REMOVE_FROM_CART',
//   (data, thunkAPI) => {
//     const { user } = thunkAPI.getState();
//     return axios
//       .delete(`/api/remove/objectId=${data.id}`, data)
//       .then(res => res.data);
//   }
// );

export const addOrCreateItemCart = createAsyncThunk(
  'ADD_OR_CREATE_ITEMCART',
  (data, thunkAPI) => {
    const { shoppingCart } = thunkAPI.getState();
    if (shoppingCart.id) {
      return axios.post(`/api/itemCart`).then(() => {
        axios.get(`/api/itemCart/${shoppingCart.id}`).then(res => res.data);
      });
    }
  }
);

export const getItemCart = createAsyncThunk(
  'GET_ITEMCARTS',
  (data, thunkAPI) => {
    const { shoppingCart } = thunkAPI.getState();
    if (shoppingCart.id) {
      return axios.get(`/api/itemCart/${shoppingCart.id}`);
    }
  }
);

const itemCartReducer = createReducer([], {
  [addOrCreateItemCart.fulfilled]: (state, action) => action.payload,
  [getItemCart.fulfilled]: (state, action) => action.payload,
});

export default itemCartReducer;
