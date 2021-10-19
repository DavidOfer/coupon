import { useEffect, useState } from "react";
import CompanyModel, { initialCompany } from "../../../models/CompanyModel";
import { ExceptionHandler } from "../../../utils/ExceptionHandler";
import globals from "../../../utils/Globals";
import jwtAxios from "../../../utils/JWTAxios";

const CompanyProfile = () => {
    const [companyDetails, setCompanyDetails] = useState<CompanyModel>(initialCompany);
    useEffect(
        () => {
            jwtAxios.post(globals.urls.company + "getCompanyDetails")
                .then(response => {
                    setCompanyDetails(response.data)
                })
                .catch(error => {
                    ExceptionHandler(error);
                }
                )
        }, []
    );
    return (
        <div>
            <h1>Profile</h1>
            {companyDetails.name}
            <br />
            {companyDetails.username}
            <br />
            {/* <Link to='/myCoupons'>Coupons</Link> */}
        </div>
    );
}
export default CompanyProfile;