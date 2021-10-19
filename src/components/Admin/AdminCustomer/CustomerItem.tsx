import { useState } from "react";
import CustomerModel from "../../../models/CustomerModel";
import CustomerItemDisplay from "./CustomerItemDisplay";
import CustomerItemEdit from "./CustomerItemEdit";

// interface ToggleProps {
//     ClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void
// }
//React.FC<{ customer: customerModel, toggleProps: ToggleProps }>

const CustomerItem: React.FC<{ customer: CustomerModel}> = (props) => {
    const [isEdit,setIsEdit] = useState(false);

    const itemEditToggleHandler= ()=>{
        setIsEdit((prevState)=>{return !prevState})
    }

    return (
        <>
        {!isEdit?
            <CustomerItemDisplay customer ={props.customer} toggleProps={{ClickHandler:itemEditToggleHandler}}/>
        :
        <CustomerItemEdit customer ={props.customer} toggleProps={{ClickHandler:itemEditToggleHandler}}/>    }
        </>
    );
}
export default CustomerItem;