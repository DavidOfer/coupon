import { Button, FormControl, InputLabel, MenuItem } from "@mui/material";
import { Form, Formik } from "formik";
import * as yup from 'yup';
import { initialCategoryModel } from "../../../models/CategoryModel";
import { MySelectField } from "../../UI/MyFormFields/MyFormFields";

interface cateLoadHandler {
    loadCoupons: (category: string) => void
}

const validationSchema = yup.object({
    category: yup.string().required()
})
interface CustomerCatCouponSortModel{
    category:string;
}
const initalCompCatSortModel:CustomerCatCouponSortModel = {
    category:""
}
const CustomerCateForm = (props: cateLoadHandler) => {
    const submitHandler = (result:CustomerCatCouponSortModel) => {
        props.loadCoupons(result.category);
    }

    return (
        <div>
            <Formik
                validateOnChange={true}
                initialValues={initalCompCatSortModel}
                onSubmit={(data: CustomerCatCouponSortModel, { setSubmitting, resetForm }) => {
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
export default CustomerCateForm;