import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getShop } from "./Api";

const initialState = {
  categories: [],
  shopItems: [],
  selectedItem: [],
};

export const fetchShopCategories = createAsyncThunk(
  "shop/fetchShopCategories",
  async () => {
    const response = await getShop.get("/products/categories");
    return response;
  }
);

export const fetchItemByCategory = createAsyncThunk(
  "shop/fetchItemByCategory",
  async ({ categoryItem, filter }) => {
    const response = await getShop.get(
      `/products/category/${categoryItem}?sort=${filter}`
    );
    return response.data;
  }
);

export const fetchItemByProductId = createAsyncThunk(
  "shop/fetchItemByProductId",
  async (productID) => {
    const response = await getShop.get(`/products/${productID}`);
    return response.data;
  }
);

const ShopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    clearCategories: (state) => {
      state.shopItems = [];
    },
    clearSelectedItem: (state) => {
      state.selectedItem = [];
    },
  },
  extraReducers: {
    [fetchShopCategories.fulfilled]: (state, { payload }) => {
      return { ...state, categories: payload.data };
    },
    [fetchItemByCategory.fulfilled]: (state, { payload }) => {
      return { ...state, shopItems: payload };
    },
    [fetchItemByProductId.fulfilled]: (state, { payload }) => {
      return { ...state, selectedItem: payload };
    },
  },
});
export default ShopSlice.reducer;
export const { clearCategories, clearSelectedItem } = ShopSlice.actions;
