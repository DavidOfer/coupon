export default interface CouponModel{
    id:number;
    company_id:number;
    amount:number;
    category:string;
    description:string;
    startDate:string;
    endDate:string;
    price:number;
    image:string;
    title:string;
}

export const initialCoupon:CouponModel = {
    id:0,
    company_id:0,
    amount:0,
    category:"",
    description:"",
    startDate:"",
    endDate:"",
    price:0,
    image:"",
    title:""
}
