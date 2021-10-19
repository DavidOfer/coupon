import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";
import JWTToken from "../models/JWTToken";


interface AuthState{
    token:string;
    clientType:string;
    isLogged:boolean;
}
const initialAuthState: AuthState ={
    token:"",
    clientType:"",
    isLogged:false
}

const getInitialState = ():AuthState => {
    const token =localStorage.getItem('token')
    if(token)
    {
        const loadState:AuthState ={
            token:token,
            isLogged:true,
            clientType:jwtDecode<JWTToken>(token).authorities[0].authority
        }
        return loadState;
    }
    return initialAuthState;
}

const authSlice= createSlice({
    name:'authState',
    initialState: getInitialState(),
    reducers: {
        login(state,action:PayloadAction<string>) {
        state.token=action.payload;
        state.clientType=jwtDecode<JWTToken>(action.payload).authorities[0].authority;
        state.isLogged=true;
        localStorage.setItem("token",action.payload);
        },
        logOut(state) {
            state.isLogged = false;
            state.token = "";
            state.clientType="";
            localStorage.removeItem("token");
            // store.getState().auth = initialAuthState;
            // store.getState().adminCompanies= {companies:[]};
            // store.getState().adminCustomers.customers= [];
            // store.getState().companyCoupons.coupons=[];
        },
    }
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
