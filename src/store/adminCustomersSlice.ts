import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import CustomerModel from "../models/CustomerModel";


interface adminCustomersState{
    customers:CustomerModel[];
}
const initialAdminCustomersState: adminCustomersState ={
    customers:[],
}

const adminCustomersSlice = createSlice({
    name:'adminCustomers',
    initialState:initialAdminCustomersState,
    reducers: {
        loadCustomer(state,action:PayloadAction<CustomerModel[]>) {
            state.customers=action.payload;
        },
        addCustomer(state,action:PayloadAction<CustomerModel>) {
            state.customers.push(action.payload);
        },
        removeCustomer(state,action:PayloadAction<number>) {
            state.customers=state.customers.filter(customer=> customer.id !== action.payload)
        },
        editCustomer(state,action:PayloadAction<CustomerModel>) {
            const newId = action.payload.id;
            const editId = state.customers.findIndex(customer=> customer.id === newId);
            state.customers[editId] = action.payload;
        },
        clearState(state) {
            state.customers=initialAdminCustomersState.customers;
        }
    }
});

export const adminCustomersActions = adminCustomersSlice.actions;
export default adminCustomersSlice.reducer;