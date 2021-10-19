import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { Button } from "@mui/material";
import { initialCoupon } from "../../../models/CouponModel";
import { useAppDispatch, useAppSelector } from "../../types/TypedReduxSelectors";
import jwtAxios from "../../../utils/JWTAxios";
import globals from "../../../utils/Globals";
import notify from "../../../utils/Notify";
import { cartActions } from "../../../store/cartSlice";
import { StyledCard } from "../../UI/Card/Card.styled";
import { ExceptionHandler } from "../../../utils/ExceptionHandler";
import { ImageDiv } from "./CouponDetails.styled";

interface RouteParams {
    couponId: string
}

const CouponDetails = () => {
    const params = useParams<RouteParams>();
    const [coupon, setCoupon] = useState(initialCoupon);
    const clientType = useAppSelector(state => state.auth.clientType);
    const dispatch = useAppDispatch();
    const history = useHistory();

    const addToCartHandler = () => {
        if (clientType === "ROLE_CUSTOMER") {
            dispatch(cartActions.addItem(coupon))
            notify.success("item added to cart")
        }
        else {
            notify.error("Please log in as a customer to add to cart")
        }

    }

    const purchaseHandler = () => {
        if (clientType === "ROLE_CUSTOMER") {
            jwtAxios.post(globals.urls.customer + "purchaseCoupon", coupon)
                .then(response => {
                    notify.success("coupon purchased")
                })
                .catch(error => {
                    ExceptionHandler(error);
                })
        }
        else {
            notify.error("Please log in as a customer to purchase a coupon")
        }
    }


    useEffect(() => {
        axios.get(globals.urls.guest + "getone/" + params.couponId).then((response) => {
            setCoupon(response.data)
        }).catch(error => {
            ExceptionHandler(error);
        })
    }, [params.couponId, history]);

    return (
        <>
            {coupon.id === 0 ? "Coupon Not Found" :
                <StyledCard minHeight="500px">
                    <ImageDiv>
                        <img src={coupon.image} alt={coupon.title} />
                    </ImageDiv>
                    <div>
                        <h3>
                            Title: {coupon.title}
                        </h3>
                    </div>
                    <div>
                        Description: {coupon.description}
                    </div>
                    <div>
                        Category: {coupon.category}
                    </div>
                    <div>
                        Price: {coupon.price}
                    </div>
                    <div>
                        Amount left: {coupon.amount}
                    </div>
                    <div>
                        Start date: {coupon.startDate}
                    </div>
                    <div>
                        End Date: {coupon.endDate}
                    </div>
                    <Button variant="contained" onClick={purchaseHandler}>Purchase</Button>
                    <Button variant="contained" onClick={addToCartHandler}>Add to cart</Button>
                </StyledCard>
            }
        </>

    );
}
export default CouponDetails;