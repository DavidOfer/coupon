import { Button, FormControl, InputLabel, MenuItem } from "@mui/material";
import { companyCouponsActions } from "../../../store/CompanyCouponsSlice";
import { ExceptionHandler } from "../../../utils/ExceptionHandler";
import globals from "../../../utils/Globals";
import jwtAxios from "../../../utils/JWTAxios";
import * as yup from 'yup';
import { useAppDispatch } from "../../types/TypedReduxSelectors";
import { Form, Formik } from "formik";
import { MySelectField } from "../../UI/MyFormFields/MyFormFields";
import { initialCategoryModel } from "../../../models/CategoryModel";


const validationSchema = yup.object({
    category: yup.string().required()
})
interface CompCatCouponmSortModel{
    category:string;
}
const initalCompCatSortModel:CompCatCouponmSortModel = {
    category:""
}

const CompanyCatCouponSort = () => {
    const dispatch = useAppDispatch();
    const loadCouponsByCat = (category:string) => {
        jwtAxios.post(globals.urls.company+"getCouponsByCat/"+category)
        .then(response=>{
            dispatch(companyCouponsActions.loadCoupons(response.data));
        }).catch(error=>{
            ExceptionHandler(error);
        })
    }
    const submitHandler = (result:CompCatCouponmSortModel) => {
        loadCouponsByCat(result.category);
    }
    return (
        <div>
            <Formik
                validateOnChange={true}
                initialValues={initalCompCatSortModel}
                onSubmit={(data: CompCatCouponmSortModel, { setSubmitting, resetForm }) => {
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
                        <FormControl sx={{ minWidth: 227 }}>
                                <InputLabel id="categoryLabel">Category</InputLabel>
                                <MySelectField labelId="categoryLabel" name="category"
                                    label="Category" >
                                    {initialCategoryModel.category.map((category,index)=>
                                    <MenuItem key={index} value={category} >{category.toLocaleLowerCase()}</MenuItem>)
                                    }

                                </MySelectField>
                            </FormControl>
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
export default CompanyCatCouponSort;