import { Button } from "@mui/material";
import CustomerModel, { initialCustomer } from "../../../models/CustomerModel";
import { adminCustomersActions } from "../../../store/adminCustomersSlice";
import globals from "../../../utils/Globals";
import jwtAxios from "../../../utils/JWTAxios";
import notify from "../../../utils/Notify";
import ToggleProps from "../../types/Toggleprops";
import { useAppDispatch } from "../../types/TypedReduxSelectors";
import * as yup from 'yup';
import { Form, Formik } from "formik";
import { MyTextField } from "../../UI/MyFormFields/MyFormFields";
import { ExceptionHandler } from "../../../utils/ExceptionHandler";


const validationSchema = yup.object({
    username: yup.string().email("email must be a valid email").required("email is a required field").min(8).max(40),
    password: yup.string().required().min(5).max(245),
    firstName: yup.string().min(2).max(35).required(),
    lastName: yup.string().min(2).max(35).required()
})

const CustomerItemAdd: React.FC<{  toggleProps: ToggleProps }> = (props) => {
    const dispatch = useAppDispatch();

    const submitHandler = (customer:CustomerModel) => {
        const sendCustomer = Object.assign({}, customer);
        jwtAxios.post(globals.urls.administrator + 'addCustomer', sendCustomer).then((response) => {
            sendCustomer.id=response.data;
            dispatch(adminCustomersActions.addCustomer(sendCustomer));
            notify.success("Customer added!")
            props.toggleProps.ClickHandler();
        }).catch(error => {
            ExceptionHandler(error);
        })
    }
    return (
        <>
            <Formik
                validateOnChange={true}
                initialValues={initialCustomer}
                onSubmit={(data: CustomerModel, { setSubmitting, resetForm }) => {
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
                            <MyTextField name="firstName" label="First name" type="input" />
                        </div>
                        <div className="formElement">
                            <MyTextField name="lastName" label="Last name" type="input" />
                        </div>
                        <div className="formElement">
                            <MyTextField name="username" label="email" type="input" />
                        </div>
                        <div className="formElement">
                            <MyTextField name="password" label="password" type="password" />
                        </div>
                        <div className="formElement">
                            <Button disabled={isSubmitting} type="submit" variant="contained">Submit</Button>
                        </div>
                        {/* <pre>
                            {JSON.stringify(values, null, 2)}
                            {JSON.stringify(errors, null, 2)}

                        </pre> */}
                    </Form>

                )}
            </Formik>
            <Button variant="contained" onClick={props.toggleProps.ClickHandler}>Cancel</Button>
        </>
    );
}
export default CustomerItemAdd;
