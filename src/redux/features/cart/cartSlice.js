import { createSlice } from '@reduxjs/toolkit';
import cartItems from '../../../cartItems';

const cartInitialState = {
  cartItems,
  quantity: 0,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: cartInitialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
    increase: (state, { payload: { id } }) => {
      let cartItem = state.cartItems.find((item) => item.id === id);
      cartItem.quantity++;
    },
    decrease: (state, { payload: { id } }) => {
      let cartItem = state.cartItems.find((item) => item.id === id);
      cartItem.quantity--;
    },
    updateQuantity: (state, { payload }) => {
      // console.log(payload);
      const { id, type } = payload;
      let cartItem = state.cartItems.find((item) => item.id === id);
      if (cartItem) {
        if (type === 'increase') {
          cartItem.quantity++;
        } else if (type === 'decrease') {
          cartItem.quantity--;
        }
      }
    },
    calculateTotalAmount: (state) => {
      let numberOfItemsInCart = 0;
      let totalAmount = 0;
      state.cartItems.forEach((item) => {
        numberOfItemsInCart += item.quantity;
        totalAmount += item.price * item.quantity;
      });
      state.quantity = numberOfItemsInCart;
      state.total = totalAmount;
    },
  },
});

export const {
  clearCart,
  removeItem,
  increase,
  decrease,
  updateQuantity,
  calculateTotalAmount,
} = cartSlice.actions;

export default cartSlice.reducer;
