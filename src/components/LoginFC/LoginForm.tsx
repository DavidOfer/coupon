import React from "react";
import { Formik, Form } from "formik";
import { Button, FormControl, InputLabel, MenuItem } from "@mui/material";
import * as yup from 'yup';
import UserDetails from "../../models/UserDetails";
import { MySelectField, MyTextField } from "../UI/MyFormFields/MyFormFields";
import { useHistory } from "react-router";
import notify from "../../utils/Notify";
import { StyledLoginForm } from "./LoginForm.styled";
import jwtAxios from "../../utils/JWTAxios";

const validationSchema = yup.object({
    username: yup.string().email("email must be a valid email").required("email is a require field").min(8).max(40),
    password: yup.string().required().min(5).max(245),
    grantedAuthorities: yup.string().required("client type is a required field")
})

const LoginForm: React.FC = () => {

    const history = useHistory();
    function send(userDetails: UserDetails) {
        jwtAxios.post<string>("http://localhost:8080/login", userDetails, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => { //jwt
                history.push('/');
            })
            .catch(error => {
                if (error.response) {
                    notify.error("Wrong Credentials");
                }
                else {
                    notify.error("No Response from server")
                }
            });
    }

    return (
        <Formik
            validateOnChange={true}
            initialValues={new UserDetails()}
            onSubmit={(data: UserDetails, { setSubmitting, resetForm }) => {
                setSubmitting(true);
                send(data);
                setSubmitting(false);
                // resetForm();
            }}
            validationSchema={validationSchema}
        >
            {({ isSubmitting, values, errors }) => (
                <StyledLoginForm>
                    <Form>
                        <div className="formElement">
                            <MyTextField name="username" label="email" type="input" />
                        </div>

                        <div className="formElement">
                            <MyTextField name="password" label="password" type="password" />
                        </div>
                        <div className="formElement">
                            <FormControl sx={{ minWidth: 227 }}>
                                <InputLabel id="clientTypeLabel">Client Type</InputLabel>
                                <MySelectField labelId="clientTypeLabel" name="grantedAuthorities"
                                    label="Client Type" >
                                    <MenuItem value={"ROLE_ADMIN"} >System Administrator</MenuItem>
                                    <MenuItem value={"ROLE_COMPANY"}>Company</MenuItem>
                                    <MenuItem value={"ROLE_CUSTOMER"}>Customer</MenuItem>
                                </MySelectField>
                            </FormControl>
                        </div>
                        <div className="formElement">
                            <Button disabled={isSubmitting} type="submit" variant="contained">Submit</Button>
                        </div>
                        {/* <pre>
                        {JSON.stringify(values, null, 2)}
                        {JSON.stringify(errors, null, 2)}

                    </pre> */}
                    </Form>
                </StyledLoginForm>
            )}
        </Formik>
    );
}
export default LoginForm;