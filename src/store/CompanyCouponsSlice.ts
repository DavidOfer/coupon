import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import CouponModel from "../models/CouponModel";

interface CompanyCouponsState{
    coupons:CouponModel[];
}
const initialCompanyCouponsState: CompanyCouponsState ={
    coupons:[],
}

const CompanyCouponsSlice = createSlice({
    name:'companyCoupons',
    initialState:initialCompanyCouponsState,
    reducers: {
        loadCoupons(state,action:PayloadAction<CouponModel[]>) {
            state.coupons=action.payload;
        },
        addCoupons(state,action:PayloadAction<CouponModel>) {
            state.coupons.push(action.payload);
        },
        removeCoupon(state,action:PayloadAction<number>) {

            state.coupons=state.coupons.filter(coupon=> coupon.id !== action.payload)
        },
        editCoupon(state,action:PayloadAction<CouponModel>) {
            const newId = action.payload.id;
            const editId = state.coupons.findIndex(coupon=> coupon.id === newId);
            state.coupons[editId] = action.payload;
        },
        clearState(state) {
            state.coupons=initialCompanyCouponsState.coupons;
        }
        
    }
});

export const companyCouponsActions = CompanyCouponsSlice.actions;
export default CompanyCouponsSlice.reducer;