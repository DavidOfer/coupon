import { useState } from "react";
import CouponModel from "../../../models/CouponModel";
import CouponItemDisplay from "./CouponItemDisplay";
import CouponItemEdit from "./CouponItemEdit";



// interface ToggleProps {
//     ClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void
// }
//React.FC<{ company: CompanyModel, toggleProps: ToggleProps }>

const CouponItem: React.FC<{ coupon: CouponModel}> = (props) => {
    const [isEdit,setIsEdit] = useState(false);

    const itemEditToggleHandler= ()=>{
        setIsEdit((prevState)=>{return !prevState})
    }

    return (
        <>
        {!isEdit?
            <CouponItemDisplay coupon ={props.coupon} toggleProps={{ClickHandler:itemEditToggleHandler}}/>
        :
        <CouponItemEdit coupon ={props.coupon} toggleProps={{ClickHandler:itemEditToggleHandler}}/>    }
        </>
    );
}
export default CouponItem;