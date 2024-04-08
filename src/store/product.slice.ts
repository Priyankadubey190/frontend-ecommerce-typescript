// productsSlice.js
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "./store";
import axios from "axios";

interface ProductType {
  image: string;
  name: string;
  color: string;
  price: number;
  description: string;
  review: number;
}

interface ProductState {
  items: ProductType[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  items: [],
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    productRequest(state) {
      state.loading = true;
      state.error = null;
    },
    productSuccess(state, action: PayloadAction<ProductType[]>) {
      state.loading = false;
      state.items = action.payload;
    },
    productFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { productRequest, productSuccess, productFailure } =
  productSlice.actions;

export default productSlice.reducer;
