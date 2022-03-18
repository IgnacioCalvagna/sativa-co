import { createReducer, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const addOrCreateItemCart = createAsyncThunk(
  'ADD_OR_CREATE_ITEMCART',
  (data, thunkAPI) => {
    const { shoppingCart } = thunkAPI.getState();
    if (shoppingCart.id) {
      return axios.post(`/api/itemCart`, data).then(() => {
        return axios.get(`/api/itemCart/${shoppingCart.id}`).then(res => {
          const items = res.data;
          const total = parseInt(
            items
              .map(({ quantity, product }) => quantity * product.price)
              .reduce((total, i) => total + i, 0)
          );
          return axios
            .put(`/api/shoppingCart/total`, { id: shoppingCart.id, total })
            .then(() => res.data);
        });
      });
    }
  }
);
export const deleteItemCart = createAsyncThunk(
  'REMOVE_ITEMCART',
  (id, thunkAPI) => {
    const { shoppingCart } = thunkAPI.getState();
    if (shoppingCart.id) {
      return axios.delete(`/api/itemCart/remove/${id}`).then(() => {
        return axios.get(`/api/itemCart/${shoppingCart.id}`).then(res => {
          const items = res.data;
          const total = parseInt(
            items
              .map(({ quantity, product }) => quantity * product.price)
              .reduce((total, i) => total + i, 0)
          );
          return axios
            .put(`/api/shoppingCart/total`, { id: shoppingCart.id, total })
            .then(() => res.data);
        });
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
  [getItemCart.fulfilled]: (state, action) => action.payload.data,
  [deleteItemCart.fulfilled]: (state, action) => action.payload,
});

export default itemCartReducer;
