import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import CustomerModel, { initialCustomer } from "../../../models/CustomerModel";
import { ExceptionHandler } from "../../../utils/ExceptionHandler";
import globals from "../../../utils/Globals";
import jwtAxios from "../../../utils/JWTAxios";
import { useHistory } from "react-router";


const Profile = () => {
    const history =useHistory()
    const [userDetails, setUserdetails] = useState<CustomerModel>(initialCustomer);
    useEffect(
        () => {
            jwtAxios.post(globals.urls.customer + "getCustomerDetails")
                .then(response => {
                    setUserdetails(response.data)
                })
                .catch(error => {
                    ExceptionHandler(error);
                }
                )
        }, []
    );
    return (
        <div style={{ maxWidth:"450px",margin:"auto"}}>
            <h1>Profile</h1>
            first name: {userDetails.firstName}
            <br />
            last name: {userDetails.lastName}
            <br />
            email: {userDetails.username}
            <br/>
            <Button variant='contained' onClick={()=>{history.push('/myCoupons')}}>Purchase History</Button>
        </div>
    );
}
export default Profile;