import { createSlice, configureStore } from "@reduxjs/toolkit";
import data from "../assets/data"; // 제공해주신 data.js

const initialState = {
  menu: data.menu, // 메뉴 데이터 초기값
  cart: [],        // 장바구니 초기값
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(item => item.id !== action.payload);
    },
  },
});

export const { addToCart, removeFromCart } = appSlice.actions;

export const store = configureStore({
  reducer: {
    app: appSlice.reducer,
  },
});