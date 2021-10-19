import { Button } from "@mui/material";
import CouponModel from "../../../models/CouponModel";
import { companyCouponsActions } from "../../../store/CompanyCouponsSlice";
import { ExceptionHandler } from "../../../utils/ExceptionHandler";
import globals from "../../../utils/Globals";
import jwtAxios from "../../../utils/JWTAxios";
import notify from "../../../utils/Notify";
import ToggleProps from "../../types/Toggleprops";
import { useAppDispatch } from "../../types/TypedReduxSelectors";

const CouponItemDisplay: React.FC<{ coupon: CouponModel, toggleProps: ToggleProps }> = (props) => {
    const dispatch = useAppDispatch();
    const deleteHandler = () => {
        jwtAxios.post(globals.urls.company + 'deleteCoupon', props.coupon.id)
            .then((response) => {
                dispatch(companyCouponsActions.removeCoupon(props.coupon.id));
                notify.success("Coupon deleted!");
            }).catch(error => {
                ExceptionHandler(error);
            })
    }
    return (
        //     <Grid container >
        //         <Grid item lg={1} >
        //             {props.coupon.id}
        //         </Grid>
        //         <Grid item lg={1}>
        //             {props.coupon.title}
        //         </Grid>
        //         <Grid item lg={1} sx={{overflowWrap: "break-word",
        // hyphens: "manual"}}>
        //             {props.coupon.description}
        //         </Grid>
        //         <Grid item lg={1}>
        //             {props.coupon.category}
        //         </Grid>
        //         <Grid item lg={1}>
        //             {props.coupon.price}
        //         </Grid>
        //         <Grid item lg={1}>
        //             {props.coupon.amount}
        //         </Grid>
        //         <Grid item lg={1}>
        //             {props.coupon.startDate}
        //         </Grid>
        //         <Grid item lg={1}>
        //             {props.coupon.endDate}
        //         </Grid>
        //         <Grid item lg={1}>
        //             {props.coupon.image}
        //         </Grid>
        //         <Grid item lg={3}>
        //          <Button variant="contained" onClick={props.toggleProps.ClickHandler}>edit</Button>
        //          <Button variant="contained" onClick={deleteHandler}>Delete</Button>
        //         </Grid>
        //     </Grid >
        <>
            <div>
                Id: {props.coupon.id} | Coupon title: {props.coupon.title} |  description: {props.coupon.description} | 
                category : {props.coupon.category} | price: {props.coupon.price} | amount: {props.coupon.amount} | 
                start date : {props.coupon.startDate} | end date {props.coupon.endDate}
            </div>
            <Button variant="contained" onClick={props.toggleProps.ClickHandler}>edit</Button>
            <Button variant="contained" onClick={deleteHandler}>Delete</Button>
        </>
    );
}
export default CouponItemDisplay;