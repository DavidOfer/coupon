import { Button } from "@mui/material";
import { Form, Formik } from "formik";
import {  useState } from "react";
import CustomerModel from "../../../models/CustomerModel";
import searchFormModel, { initialSearchForm } from "../../../models/SearchFormModel";
import { ExceptionHandler } from "../../../utils/ExceptionHandler";
import globals from "../../../utils/Globals";
import jwtAxios from "../../../utils/JWTAxios";
import * as yup from 'yup';
import { MyTextField } from "../../UI/MyFormFields/MyFormFields";

const validationSchema = yup.object({
    id: yup.number().integer().positive().required("Please enter an id number").max(12)
})

const AdminOneCustomer = () => {
    const [customer, setCustomer] = useState<CustomerModel | undefined>(undefined);

    const submitHandler = (searchForm: searchFormModel) => {
        jwtAxios.post(globals.urls.administrator + 'getOneCustomer', searchForm.id).then((response) => {
            setCustomer(response.data)
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
                            <MyTextField name="id" label="customer ID" type="number" />
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
            <br/>
            {customer?<div>username: {customer.username} <br/>
            first name: {customer.firstName}<br/>
            last name: {customer.lastName}<br/>
            num of coupons: {customer.coupons.length}</div>:""}
        </div>
    );
}
export default AdminOneCustomer;