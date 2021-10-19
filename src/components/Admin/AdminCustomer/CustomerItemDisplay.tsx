import { Button } from "@mui/material";
import CustomerModel from "../../../models/CustomerModel";
import { adminCustomersActions } from "../../../store/adminCustomersSlice";
import { ExceptionHandler } from "../../../utils/ExceptionHandler";
import globals from "../../../utils/Globals";
import jwtAxios from "../../../utils/JWTAxios";
import notify from "../../../utils/Notify";
import ToggleProps from "../../types/Toggleprops";
import { useAppDispatch } from "../../types/TypedReduxSelectors";




const CustomerItemDisplay: React.FC<{ customer: CustomerModel, toggleProps: ToggleProps }> = (props) => {
    const dispatch = useAppDispatch();
    const deleteHandler = () => {
        jwtAxios.post(globals.urls.administrator + 'deleteCustomer', props.customer.id)
        .then((response) => {
            dispatch(adminCustomersActions.removeCustomer(props.customer.id));
            notify.success("Company deleted!")

        }).catch(error => {
            ExceptionHandler(error);
        })
    }
    return (
        <>
            <div>Id: {props.customer.id} | customer Name: {props.customer.firstName}| customer Username: {props.customer.username} | Num of coupons:{props.customer.coupons.length}</div>
            <Button variant="contained" onClick={props.toggleProps.ClickHandler}>edit</Button>
            <Button variant="contained" onClick={deleteHandler}>Delete</Button>
        </>
    );
}
export default CustomerItemDisplay;