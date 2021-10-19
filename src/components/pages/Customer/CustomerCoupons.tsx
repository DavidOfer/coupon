import { Button } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import CouponModel from "../../../models/CouponModel";
import { ExceptionHandler } from "../../../utils/ExceptionHandler";
import globals from "../../../utils/Globals";
import jwtAxios from "../../../utils/JWTAxios";
import CustomerCateForm from "../../Customer/CustomerCateForm/CustomerCateForm";
import CustomerDisplayCoupon from "../../Customer/CustomerDisplayCoupon/CustomerDisplayCoupon";
import CustomerPriceForm from "../../Customer/CustomerPriceForm/CustomerPriceForm";


const CustomerCoupons = ()=>{
    const [coupons, setCoupons] = useState<CouponModel[]>([]);

    const loadCouponsHandler = useCallback(()=>{
        jwtAxios.post(globals.urls.customer + "getCustomerCoupons")
        .then(response => {
            setCoupons(response.data)
        })
        .catch(error => {
            ExceptionHandler(error);
        }
        )
    },[]);
    const loadByMaxHandler = useCallback((maxPrice:any)=>{
        jwtAxios.post(globals.urls.customer +"getCouponsByPrice/"+maxPrice)
        .then(response => {
            setCoupons(response.data)
        })
        .catch(error => {
            ExceptionHandler(error);
        }
        )
    },[]);
    const loadByCatHandler = useCallback((category:string)=>{
        jwtAxios.post(globals.urls.customer +"getCouponsByCat/"+category)
        .then(response => {
            setCoupons(response.data)
        })
        .catch(error => {
            ExceptionHandler(error);
        }
        )
    },[]);
    useEffect(
        () => {
            loadCouponsHandler()}
        , [loadCouponsHandler]);
    const displayCoupons = coupons.map(couponItem=>
    <CustomerDisplayCoupon coupon={couponItem} key={couponItem.id} />)
    return (
        <div>
            <CustomerCateForm loadCoupons={loadByCatHandler}/>
            <CustomerPriceForm loadCoupons={loadByMaxHandler}/>
            <Button variant="contained" onClick={loadCouponsHandler}>Reset</Button>
            {displayCoupons}
        </div>
    );
}
export default CustomerCoupons;