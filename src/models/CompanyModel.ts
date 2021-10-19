import CouponModel from "./CouponModel";

export default interface CompanyModel{
    id:number;
    name:string;
    username:string;
    password:string;
    role:string;
    coupons?:CouponModel[];
    enabled:boolean;
    accountNonLocked:boolean;
    credentialsNonExpired:boolean;
    accountNonExpired:boolean;
}

export const initialCompany:CompanyModel ={
    id:0,
    name:"",
    username:"",
    password:"",
    role:"ROLE_COMPANY",
    coupons:[],
    enabled:true,
    accountNonLocked:true,
    credentialsNonExpired:true,
    accountNonExpired:true
}

