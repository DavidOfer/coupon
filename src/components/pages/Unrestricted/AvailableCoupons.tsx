import axios from "axios";
import {  useEffect, useState } from "react";
import CouponModel from "../../../models/CouponModel";
import { ExceptionHandler } from "../../../utils/ExceptionHandler";
import globals from "../../../utils/Globals";
import CouponsGrid from "../../Coupon/CouponsGrid/CouponsGrid";
import LoadingSpinner from "../../LoadingSpinner/LoadingSpinner";



const AvailableCoupons = () => {
    const [coupons, setCoupons] = useState<CouponModel[]>([]);
    const [isLoading,setIsloading] = useState(false);

    // const fetchProductsHandler = useCallback(async () => {
    //     console.log(globals.urls.guest+"getall")
    //     axios.get(globals.urls.guest+"getall").then((response)=>{
    //         console.log(response.data)
    //         setCoupons(response.data)})
    // },[]);

    useEffect(()=>{
        setIsloading(true)
        axios.get(globals.urls.guest+"getall").then((response)=>{
            setCoupons(response.data);
            setIsloading(false);
        }).catch(error=>{
            setIsloading(false);
            ExceptionHandler(error);
        })
    },[]);

    return (
        <div>
            <h2 style={{margin:0}}>עמוד הקופונים</h2>
            {isLoading?<LoadingSpinner/>:""}
            <CouponsGrid coupons={coupons}/>
        </div>
    )
}
export default AvailableCoupons;