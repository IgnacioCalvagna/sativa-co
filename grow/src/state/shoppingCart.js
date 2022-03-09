import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addToShoppingCart = createAsyncThunk(
  "ADD_TO_CART",
  (data, thunkAPI) => {
    const { user } = thunkAPI.getState();
    return axios.post(`/api/add/objectId=${data.id}`, data).then((res) => res);
  }
);

export const removeFromShoppingCart = createAsyncThunk(
  "REMOVE_FROM_CART",
  (data, thunkAPI) => {
    const { user } = thunkAPI.getState();
    return axios
      .delete(`/api/remove/objectId=${data.id}`, data)
      .then((res) => res.data);
  }
);

const shoppingCartReducer = createReducer(
    {},
    {
      [addToShoppingCart.fulfilled]: (state, action) => action.payload,
      [removeFromShoppingCart.fulfilled]: (state, action) => action.payload,
    }
  );
  
  export default shoppingCartReducer;