import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import CouponModel from "../models/CouponModel";

interface CartState {
  totalCoupons: number;
  coupons: CouponModel[];
}
const initialCartState: CartState = {
  totalCoupons: 0,
  coupons: [],
};

const cartSlice = createSlice({
  name: "cartState",
  initialState: initialCartState,
  reducers: {
    addItem(state, action: PayloadAction<CouponModel>) {
      const isNew =
        state.coupons.findIndex((item) => item.id === action.payload.id) < 0;
      if (isNew) {
        state.coupons.push(action.payload);
        state.totalCoupons = state.totalCoupons + 1;
      }
    },
    removeItem(state, action: PayloadAction<number>) {
      const removeIndex = state.coupons.findIndex(
        (item) => item.id === action.payload
      );
      state.coupons.splice(removeIndex, 1);
    },
    clearCart(state) {
      state.coupons= initialCartState.coupons;
      state.totalCoupons=initialCartState.totalCoupons;
    },
  },
});
export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
