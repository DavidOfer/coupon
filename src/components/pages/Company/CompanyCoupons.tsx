import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { companyCouponsActions } from "../../../store/CompanyCouponsSlice";
import { ExceptionHandler } from "../../../utils/ExceptionHandler";
import globals from "../../../utils/Globals";
import jwtAxios from "../../../utils/JWTAxios";
import CompanyCatCouponSort from "../../Company/CompanyCatCouponSort/CompanyCatCouponSort";
import CouponItem from "../../Company/CompanyCoupons/CouponItem";
import CouponItemAdd from "../../Company/CompanyCoupons/CouponItemAdd";
import CompanyMaxPriceCouponSort from "../../Company/CompanyMaxPriceCouponSort/CompanyMaxPriceCouponSort";
import LoadingSpinner from "../../LoadingSpinner/LoadingSpinner";
import { useAppDispatch, useAppSelector } from "../../types/TypedReduxSelectors";

const CompanyCoupons = () => {
    const dispatch = useAppDispatch();
    const CompanyCoupons = useAppSelector((state) => state.companyCoupons.coupons);
    const [isLoading, setIsloading] = useState(false);
    const [isAdd, setIsAdd] = useState(false);
    const history = useHistory();

    const itemAddToggleHandler = () => {
        setIsAdd((prevState) => { return !prevState })
    }

    useEffect(() => {
        setIsloading(true)
        jwtAxios.post(globals.urls.company + "getCoupons").then((response) => {
            dispatch(companyCouponsActions.loadCoupons(response.data))
            setIsloading(false)
        }).catch(error => {
            setIsloading(false)
            ExceptionHandler(error);
        })


    }, [dispatch, history]);
    const displayCoupons = CompanyCoupons.map((coupon,index) =>
        <CouponItem key={index} coupon={coupon} />)
    return (
        <>
            {isLoading && <LoadingSpinner />}
            <CompanyMaxPriceCouponSort />
            <CompanyCatCouponSort />
            {/* <Grid container>
                <Grid item lg={1} >
                    <strong>id</strong>
                </Grid>
                <Grid item lg={1} >
                    <strong>Title</strong>
                </Grid>
                <Grid item lg={1} >
                    <strong>Description</strong>
                </Grid>
                <Grid item lg={1} >
                    <strong>Category</strong>
                </Grid>
                <Grid item lg={1} >
                    <strong>Price</strong>
                </Grid>
                <Grid item lg={1} >
                    <strong>Amount</strong>
                </Grid>
                <Grid item lg={1} >
                    <strong>Start Date</strong>
                </Grid>
                <Grid item lg={1} >
                    <strong>End Date</strong>
                </Grid>
                <Grid item lg={1} >
                    <strong>Image</strong>
                </Grid> */}
                {displayCoupons}
            {/* </Grid> */}
            {isAdd ?
                <CouponItemAdd toggleProps={{ ClickHandler: itemAddToggleHandler }} />
                :
                <Button variant="contained" onClick={itemAddToggleHandler}>Add Coupon</Button>
            }
        </>
    );
}
export default CompanyCoupons;