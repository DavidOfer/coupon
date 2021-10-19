import { useState } from "react";
import CompanyModel from "../../../models/CompanyModel";
import CompanyItemDisplay from "./CompanyItemDisplay";
import CompanyItemEdit from "./CompanyItemEdit";

// interface ToggleProps {
//     ClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void
// }
//React.FC<{ company: CompanyModel, toggleProps: ToggleProps }>

const CompanyItem: React.FC<{ company: CompanyModel}> = (props) => {
    const [isEdit,setIsEdit] = useState(false);

    const itemEditToggleHandler= ()=>{
        setIsEdit((prevState)=>{return !prevState})
    }

    return (
        <>
        {!isEdit?
            <CompanyItemDisplay company ={props.company} toggleProps={{ClickHandler:itemEditToggleHandler}}/>
        :
        <CompanyItemEdit company ={props.company} toggleProps={{ClickHandler:itemEditToggleHandler}}/>    }
        </>
    );
}
export default CompanyItem;