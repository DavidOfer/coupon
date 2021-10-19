import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { adminCompaniesActions } from "../../../store/adminCompaniesSlice";
import { ExceptionHandler } from "../../../utils/ExceptionHandler";
import globals from "../../../utils/Globals";
import jwtAxios from "../../../utils/JWTAxios";
import CompanyItem from "../../Admin/AdminCompany/CompanyItem";
import CompanyItemAdd from "../../Admin/AdminCompany/CompanyItemAdd";
import LoadingSpinner from "../../LoadingSpinner/LoadingSpinner";
import { useAppDispatch, useAppSelector } from "../../types/TypedReduxSelectors";

const AdminCompanies = () => {
    const dispatch = useAppDispatch();
    const adminCompanies = useAppSelector((state) => state.adminCompanies.companies);

    const [isLoading, setIsloading] = useState(false);
    const [isAdd, setIsAdd] = useState(false);
    const history = useHistory();

    const itemAddToggleHandler = () => {
        setIsAdd((prevState) => { return !prevState })
    }

    useEffect(() => {
        setIsloading(true)
        jwtAxios.post(globals.urls.administrator + "getAllCompany").then((response) => {
            dispatch(adminCompaniesActions.loadCompanies(response.data));
            setIsloading(false);
        }).catch(error => {
            setIsloading(false);
            ExceptionHandler(error);
        })


    }, [dispatch, history]);
    const displayCompanies = adminCompanies.map(company =>
        <li key={company.id}>
            {/*<CompanyItem company={company} toggleProps={{ClickHandler:editHandler}}/> */}
            <CompanyItem company={company} />
        </li>
    )
    return (
        <>
            {isLoading && <LoadingSpinner />}
            {isAdd ?
                <CompanyItemAdd toggleProps={{ ClickHandler: itemAddToggleHandler }} />
                :
                <Button variant="contained" onClick={itemAddToggleHandler}>Add Company</Button>
            }
                {displayCompanies}

        </>
    );
}
export default AdminCompanies;