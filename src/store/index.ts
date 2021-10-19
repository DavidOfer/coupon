import { configureStore } from "@reduxjs/toolkit";
import adminCompaniesSliceReducer from "./adminCompaniesSlice";
import adminCustomersSliceReducer from "./adminCustomersSlice";
import authSliceReducer from "./authSlice";
import cartSliceReducer from "./cartSlice";
import CompanyCouponsSliceReducer from "./CompanyCouponsSlice";
import uiSlice from "./uiSlice";


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    auth: authSliceReducer,
    adminCompanies: adminCompaniesSliceReducer,
    adminCustomers: adminCustomersSliceReducer,
    companyCoupons: CompanyCouponsSliceReducer,
    cart:cartSliceReducer
  },
});
export default store;
