import { Button } from "@mui/material";
import CompanyModel from "../../../models/CompanyModel";
import { adminCompaniesActions } from "../../../store/adminCompaniesSlice";
import { ExceptionHandler } from "../../../utils/ExceptionHandler";
import globals from "../../../utils/Globals";
import jwtAxios from "../../../utils/JWTAxios";
import notify from "../../../utils/Notify";
import ToggleProps from "../../types/Toggleprops";
import { useAppDispatch } from "../../types/TypedReduxSelectors";



const CompanyItemDisplay: React.FC<{ company: CompanyModel, toggleProps: ToggleProps }> = (props) => {
    const dispatch = useAppDispatch();
    const deleteHandler = () => {
        jwtAxios.post(globals.urls.administrator + 'deleteCompany', props.company.id)
        .then((response) => {
            dispatch(adminCompaniesActions.removeCompany(props.company.id));
            notify.success("Company deleted!")
        }).catch(error => {
            ExceptionHandler(error);
        })
    }
    return (
        <>
            <div>Id: {props.company.id} | Company Name: {props.company.name}| Company Username: {props.company.username} | Num of coupons:{props.company.coupons.length}</div>
            <Button variant="contained" onClick={props.toggleProps.ClickHandler}>edit</Button>
            <Button variant="contained" onClick={deleteHandler}>Delete</Button>
        </>
    );
}
export default CompanyItemDisplay;