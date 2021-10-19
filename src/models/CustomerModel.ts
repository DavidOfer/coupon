import CouponModel from "./CouponModel";

export default interface CustomerModel{
    id:number;
    firstName:string;
    lastName:string;
    username:string;
    password:string;
    role:string;
    coupons?:CouponModel[];
    enabled:boolean;
    accountNonLocked:boolean;
    credentialsNonExpired:boolean;
    accountNonExpired:boolean;
}

export const initialCustomer:CustomerModel ={
    id:0,
    firstName:"",
    lastName:"",
    username:"",
    password:"",
    role:"ROLE_CUSTOMER",
    coupons:[],
    enabled:true,
    accountNonLocked:true,
    credentialsNonExpired:true,
    accountNonExpired:true
}

