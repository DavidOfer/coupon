import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { adminCustomersActions } from "../../../store/adminCustomersSlice";
import { ExceptionHandler } from "../../../utils/ExceptionHandler";
import globals from "../../../utils/Globals";
import jwtAxios from "../../../utils/JWTAxios";
import CustomerItem from "../../Admin/AdminCustomer/CustomerItem";
import CustomerItemAdd from "../../Admin/AdminCustomer/CustomerItemAdd";
import LoadingSpinner from "../../LoadingSpinner/LoadingSpinner";
import { useAppDispatch, useAppSelector } from "../../types/TypedReduxSelectors";

const AdminCustomers = () => {
    const dispatch = useAppDispatch();
    const adminCustomers = useAppSelector((state) => state.adminCustomers.customers);

    const [isLoading, setIsloading] = useState(false);
    const [isAdd, setIsAdd] = useState(false);
    const history = useHistory();

    const itemAddToggleHandler = () => {
        setIsAdd((prevState) => { return !prevState })
    }

    useEffect(() => {
        setIsloading(true)
        jwtAxios.post(globals.urls.administrator + "getAllCustomer").then((response) => {
            dispatch(adminCustomersActions.loadCustomer(response.data))
            setIsloading(false)
        }).catch(error => {
            setIsloading(false)
            ExceptionHandler(error);
        })


    }, [dispatch, history]);
    const displayCustomers = adminCustomers.map(customer =>
        <li key={customer.id}>
            <CustomerItem customer={customer} />
        </li>
    )
    return (
        <>
            {isLoading && <LoadingSpinner />}
            {isAdd ?
                <CustomerItemAdd toggleProps={{ ClickHandler: itemAddToggleHandler }} />
                :
                <Button variant="contained" onClick={itemAddToggleHandler}>Add Customer</Button>
            }
            <ul>
                {displayCustomers}
            </ul>
        </>
    );
}
export default AdminCustomers;