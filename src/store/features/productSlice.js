import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products.push(action.payload);
    },
  },
});

export const { setProducts } = productSlice.actions;

export default productSlice;