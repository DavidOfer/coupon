import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import CompanyModel from "../models/CompanyModel";

interface adminCompaniesState{
    companies:CompanyModel[];
}
const initialAdminCompaniesState: adminCompaniesState ={
    companies:[],
}

const adminCompaniesSlice = createSlice({
    name:'adminCompanies',
    initialState:initialAdminCompaniesState,
    reducers: {
        loadCompanies(state,action:PayloadAction<CompanyModel[]>) {
            state.companies=action.payload;
        },
        addCompany(state,action:PayloadAction<CompanyModel>) {
            state.companies.push(action.payload);
        },
        removeCompany(state,action:PayloadAction<number>) {

            state.companies=state.companies.filter(company=> company.id !== action.payload)
        },
        editCompany(state,action:PayloadAction<CompanyModel>) {
            const newId = action.payload.id;
            const editId = state.companies.findIndex(company=> company.id === newId);
            state.companies[editId] = action.payload;
        },
        clearState(state) {
            state.companies=initialAdminCompaniesState.companies;
        }
    }
});



export const adminCompaniesActions = adminCompaniesSlice.actions;
export default adminCompaniesSlice.reducer;