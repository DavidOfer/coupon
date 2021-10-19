import { Button, Container, FormControl, Grid, InputLabel, MenuItem } from "@mui/material";
import { Form, Formik } from "formik";
import CouponModel, { initialCoupon } from "../../../models/CouponModel";
import { companyCouponsActions } from "../../../store/CompanyCouponsSlice";
import globals from "../../../utils/Globals";
import jwtAxios from "../../../utils/JWTAxios";
import notify from "../../../utils/Notify";
import ToggleProps from "../../types/Toggleprops";
import { useAppDispatch } from "../../types/TypedReduxSelectors";
import * as yup from 'yup';
import { MySelectField, MyTextField } from "../../UI/MyFormFields/MyFormFields";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { ExceptionHandler } from "../../../utils/ExceptionHandler";
import { initialCategoryModel } from "../../../models/CategoryModel";


const currentDate = new Date();

export const couponValidationSchema = yup.object({
    title: yup.string().min(4).max(50).required(),
    description: yup.string().min(10).max(240).required(),
    category: yup.string().required(),
    price: yup.number().required().positive(),
    amount: yup.number().required().moreThan(0),
    startDate: yup.date().required("Start Date is a required field"),
    endDate: yup.date().min(currentDate).required("End Date is a required field"),
    image: yup.string().required()

})

const CouponItemAdd: React.FC<{ toggleProps: ToggleProps }> = (props) => {

    const dispatch = useAppDispatch();

    const submitHandler = (coupon: CouponModel) => {
        const sendCoupon = Object.assign({}, coupon);
        jwtAxios.post(globals.urls.company + 'addCoupon', sendCoupon).then((response) => {
            sendCoupon.id = response.data;
            dispatch(companyCouponsActions.addCoupons(sendCoupon));
            notify.success("Coupon added!")
            props.toggleProps.ClickHandler();
        }).catch(error => {
            ExceptionHandler(error);
        })
    }
    return (

        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Container maxWidth="lg">
                <Formik
                    validateOnChange={true}
                    initialValues={initialCoupon}
                    onSubmit={(data: CouponModel, { setSubmitting, resetForm }) => {
                        setSubmitting(true);
                        submitHandler(data);
                        setSubmitting(false);
                        // resetForm();
                    }}
                    validationSchema={couponValidationSchema}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <Grid container spacing={1}>
                                <Grid item md={3}>
                                    <MyTextField name="title" label="Title" type="input" />
                                </Grid>
                                <Grid item md={3}>
                                    <MyTextField name="description" label="Description" type="input" />
                                </Grid>
                                <Grid item md={3}>
                                    <FormControl sx={{ minWidth: 227 }}>
                                        <InputLabel id="categoryLabel">Category</InputLabel>
                                        <MySelectField labelId="categoryLabel" name="category"
                                            label="Category" >
                                            {initialCategoryModel.category.map((category, index) =>
                                                <MenuItem key={index} value={category} >{category.toLocaleLowerCase()}</MenuItem>)
                                            }
                                        </MySelectField>
                                    </FormControl>
                                </Grid>
                                <Grid item md={3}>
                                    <MyTextField name="price" label="Price" type="input" />
                                </Grid>
                                <Grid item md={3}>
                                    <MyTextField name="amount" label="Amount" type="input" />
                                </Grid>
                                <Grid item md={3}>
                                    <MyTextField name="startDate" label="Start Date" type="date" />
                                </Grid>
                                <Grid item md={3}>
                                    <MyTextField name="endDate" label="End Date" type="date" />
                                </Grid>
                                <Grid item md={3}>
                                    <MyTextField name="image" label="Image" type="input" />
                                </Grid>
                                <Grid item md={12}>
                                    <Button disabled={isSubmitting} type="submit" variant="contained">Submit</Button>
                                    <Button variant="contained" onClick={props.toggleProps.ClickHandler}>Cancel</Button>

                                </Grid>
                            </Grid>
                        </Form>

                    )}
                </Formik>
            </Container>
        </LocalizationProvider>
    );
}
export default CouponItemAdd;
