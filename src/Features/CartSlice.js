import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  grandTotal: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemsToCart: (state, { payload }) => {
      const itemIndex = state.cart.findIndex((item) => item.id === payload.id);

      if (itemIndex >= 0) {
        state.cart[itemIndex].count = payload.count;
        state.cart[itemIndex].totalPrice =
          state.cart[itemIndex].price * state.cart[itemIndex].count;
      } else {
        let totalPrice = payload.count * payload.price;
        state.cart.push({ ...payload, totalPrice });
      }
    },
    increaseCount: (state, { payload }) => {
      let itemIndex = state.cart.findIndex((item) => item.id === payload.id);
      if (itemIndex >= 0) {
        state.cart[itemIndex].count = state.cart[itemIndex].count + 1;
        state.cart[itemIndex].totalPrice =
          state.cart[itemIndex].price * state.cart[itemIndex].count;
      }
    },
    decreaseCount: (state, { payload }) => {
      let itemIndex = state.cart.findIndex((item) => item.id === payload.id);
      if (itemIndex >= 0) {
        state.cart[itemIndex].count = state.cart[itemIndex].count - 1;
      }
      if (state.cart[itemIndex].count === 0) {
        state.cart[itemIndex].count = 1;
      }
      state.cart[itemIndex].totalPrice =
        state.cart[itemIndex].price * state.cart[itemIndex].count;
    },
    deleteItem: (state, { payload }) => {
      let temp = state.cart.filter((item) => {
        if (item.id !== payload) {
          return true;
        }
      });
      state.cart = temp;
    },
    computeTotal: (state) => {
      let total = state.cart.reduce((cartTotal, cartItem) => {
        cartTotal += cartItem.totalPrice;
        return cartTotal;
      }, 0);
      state.grandTotal = total.toFixed(2);
    },
  },
});
export default cartSlice.reducer;
export const {
  addItemsToCart,
  increaseCount,
  decreaseCount,
  deleteItem,
  computeTotal,
} = cartSlice.actions;
