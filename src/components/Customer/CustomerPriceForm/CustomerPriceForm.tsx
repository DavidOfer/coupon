import { Button } from "@mui/material";
import { Form, Formik } from "formik";
import * as yup from 'yup';
import { MyTextField } from "../../UI/MyFormFields/MyFormFields";


const validationSchema = yup.object({
    price: yup.number().positive().required()
})
interface CusPriceCouponSortModel{
    price:number | "";
}
const initalCusPriceSortModel:CusPriceCouponSortModel = {
    price:""
}
interface priceLoadHandler {
    loadCoupons: (price: any) => void
}
const CustomerPriceForm = (props: priceLoadHandler) => {
    const submitHandler = (result:CusPriceCouponSortModel) => {
        props.loadCoupons(result.price);
    }

    return (
        <div>
            <Formik
                validateOnChange={true}
                initialValues={initalCusPriceSortModel}
                onSubmit={(data: CusPriceCouponSortModel, { setSubmitting, resetForm }) => {
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
                            <MyTextField name="price" label="Max Price" type="number" />
                        </div>
                        <div className="formButtons">
                            <Button disabled={isSubmitting} type="submit" variant="contained">Submit</Button>
                        </div>
                    </Form>

                )}
            </Formik>
            <br />
        </div>
    );
}
export default CustomerPriceForm;