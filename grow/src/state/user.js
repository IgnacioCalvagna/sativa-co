import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const sendSignUpRequest = createAsyncThunk("REGISTER", (userData) => {
  return axios.post("/api/users/register", userData).then((res) => res);
});

export const sendLoginRequest = createAsyncThunk("LOGIN", (userData) => {
  return axios.post("/api/users/login", userData).then((res) => res.data);
});

export const sendLogoutRequest = createAsyncThunk("LOGOUT", () => {
  return axios.post("/api/users/logout").then((res) => res.data);
});

export const persistUser = createAsyncThunk("PERSIST", () => {
  return axios.get("/api/users/me").then((res) => res.data);
});

const userReducer = createReducer(
  {},
  {
    [sendSignUpRequest.fulfilled]: (state, action) => action.payload,
    [sendLoginRequest.fulfilled]: (state, action) => action.payload,
    [sendLogoutRequest.fulfilled]: (state, action) => {
      return {};
    },
    [persistUser.fulfilled]: (state, action) => action.payload,
  }
);

export default userReducer;
