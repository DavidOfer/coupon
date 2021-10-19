import { Button } from "@mui/material";
import { Form, Formik } from "formik";
import CompanyModel, { initialCompany } from "../../../models/CompanyModel";
import { adminCompaniesActions } from "../../../store/adminCompaniesSlice";
import globals from "../../../utils/Globals";
import jwtAxios from "../../../utils/JWTAxios";
import notify from "../../../utils/Notify";
import ToggleProps from "../../types/Toggleprops";
import * as yup from 'yup';
import { useAppDispatch } from "../../types/TypedReduxSelectors";
import { MyTextField } from "../../UI/MyFormFields/MyFormFields";
import { StyledAdminCompanyForm } from "./CompanyItemAdd.styled";
import { ExceptionHandler } from "../../../utils/ExceptionHandler";


const validationSchema = yup.object({
    username: yup.string().email("email must be a valid email").required("email is a required field").min(8).max(40),
    password: yup.string().required().min(5).max(245),
    name: yup.string().min(3).max(35).required()
})

const CompanyItemAdd: React.FC<{ toggleProps: ToggleProps }> = (props) => {
    const dispatch = useAppDispatch();


    const submitHandler = (company: CompanyModel) => {
        const sendCompany = Object.assign({}, company);
        jwtAxios.post(globals.urls.administrator + 'addCompany', sendCompany).then((response) => {
            sendCompany.id = response.data;
            dispatch(adminCompaniesActions.addCompany(sendCompany));
            notify.success("Company added!")
            props.toggleProps.ClickHandler();
        }).catch(error => {
            ExceptionHandler(error);
        })
    }
    return (
        <StyledAdminCompanyForm>
            <Formik
                validateOnChange={true}
                initialValues={initialCompany}
                onSubmit={(data: CompanyModel, { setSubmitting, resetForm }) => {
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
                            <MyTextField name="name" label="name" type="input" />
                        </div>
                        <div className="formElement">
                            <MyTextField name="username" label="email" type="input" />
                        </div>
                        <div className="formElement">
                            <MyTextField name="password" label="password" type="password" />
                        </div>
                        <div className="formButtons">
                            <Button disabled={isSubmitting} type="submit" variant="contained">Submit</Button>
                            <Button variant="contained" onClick={props.toggleProps.ClickHandler}>Cancel</Button>
                        </div>
                        {/* <pre>
                            {JSON.stringify(values, null, 2)}
                            {JSON.stringify(errors, null, 2)}

                        </pre> */}
                    </Form>

                )}
            </Formik>
        </StyledAdminCompanyForm>
    );
}
export default CompanyItemAdd;
