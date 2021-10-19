import { Button } from "@mui/material";
import { Form, Formik } from "formik";
import { companyCouponsActions } from "../../../store/CompanyCouponsSlice";
import { ExceptionHandler } from "../../../utils/ExceptionHandler";
import globals from "../../../utils/Globals";
import jwtAxios from "../../../utils/JWTAxios";
import * as yup from 'yup';
import { useAppDispatch } from "../../types/TypedReduxSelectors";
import { MyTextField } from "../../UI/MyFormFields/MyFormFields";

const validationSchema = yup.object({
    price: yup.number().positive().required()
})
interface CompPriceCouponSortModel{
    price:number | "";
}
const initalCompPriceSortModel:CompPriceCouponSortModel = {
    price:""
}

const CompanyMaxPriceCouponSort = () => {
    const dispatch = useAppDispatch();
    const loadCouponsByMax = (maxPrice:number | "") => {
        jwtAxios.post(globals.urls.company+"getCouponsByPrice",maxPrice)
        .then(response=>{
            dispatch(companyCouponsActions.loadCoupons(response.data));
        }).catch(error=>{
            ExceptionHandler(error);
        })
    }
    const submitHandler = (result: CompPriceCouponSortModel) => {
        loadCouponsByMax(result.price);
    }
    return (
        <div>
            <Formik
                validateOnChange={true}
                initialValues={initalCompPriceSortModel}
                onSubmit={(data: CompPriceCouponSortModel, { setSubmitting, resetForm }) => {
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
        </div>
    );
}
export default CompanyMaxPriceCouponSort;