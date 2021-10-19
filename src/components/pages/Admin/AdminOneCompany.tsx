import { Button } from "@mui/material";
import { Form, Formik } from "formik";
import {  useState } from "react";
import CompanyModel from "../../../models/CompanyModel";
import { ExceptionHandler } from "../../../utils/ExceptionHandler";
import globals from "../../../utils/Globals";
import jwtAxios from "../../../utils/JWTAxios";
import * as yup from 'yup';
import { MyTextField } from "../../UI/MyFormFields/MyFormFields";
import searchFormModel, { initialSearchForm } from "../../../models/SearchFormModel";

const validationSchema = yup.object({
    id: yup.number().integer().positive().required("Please enter an id number").max(12)
})


const AdminOneCompany = () => {
    const [company, setCompany] = useState<CompanyModel | undefined>(undefined);

    const submitHandler = (searchForm: searchFormModel) => {
        jwtAxios.post(globals.urls.administrator + 'getOneCompany', searchForm.id).then((response) => {
            setCompany(response.data)
        }).catch(error => {
            ExceptionHandler(error);
        })
    }
    return (
        <div>
            <Formik
                validateOnChange={true}
                initialValues={initialSearchForm}
                onSubmit={(data: searchFormModel, { setSubmitting, resetForm }) => {
                    setSubmitting(true);
                    submitHandler(data);
                    setSubmitting(false);
                    // resetForm();
                }}
                validationSchema={validationSchema}
            >
                {({ isSubmitting, values, errors }) => (
                    <Form>
                        <div className="formElement">
                            <MyTextField name="id" label="Company ID" type="number" />
                        </div>
                        <div className="formButtons">
                            <Button disabled={isSubmitting} type="submit" variant="contained">Submit</Button>
                        </div>
                        {/* <pre>
                            {JSON.stringify(values, null, 2)}
                            {JSON.stringify(errors, null, 2)}

                        </pre> */}
                    </Form>

                )}
            </Formik>
            <br />
            {company ? <div>name: {company.name} <br/>
            username: {company.username} <br/>
            number of coupons: {company.coupons.length}
            </div>
            : ""}
        </div>
    );
}
export default AdminOneCompany;