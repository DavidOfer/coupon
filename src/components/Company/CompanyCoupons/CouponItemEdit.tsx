import { LocalizationProvider } from "@mui/lab";
import { Button, Container, FormControl, Grid, InputLabel, MenuItem } from "@mui/material";
import { Form, Formik } from "formik";
import CouponModel from "../../../models/CouponModel";
import { companyCouponsActions } from "../../../store/CompanyCouponsSlice";
import globals from "../../../utils/Globals";
import jwtAxios from "../../../utils/JWTAxios";
import notify from "../../../utils/Notify";
import ToggleProps from "../../types/Toggleprops";
import { useAppDispatch } from "../../types/TypedReduxSelectors";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { couponValidationSchema } from "./CouponItemAdd";
import { MySelectField, MyTextField } from "../../UI/MyFormFields/MyFormFields";
import { ExceptionHandler } from "../../../utils/ExceptionHandler";



const CouponItemEdit: React.FC<{ coupon: CouponModel, toggleProps: ToggleProps }> = (props) => {
    const dispatch = useAppDispatch();

    const submitHandler = (coupon:CouponModel) => {
        jwtAxios.put(globals.urls.company + 'updateCoupon', coupon).then((response) => {
            dispatch(companyCouponsActions.editCoupon(coupon));
            notify.success("Coupon updated!");
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
                    initialValues={props.coupon}
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
                                            <MenuItem value={"FOOD"} >Food</MenuItem>
                                            <MenuItem value={"ELECTRICITY"}>Electricity</MenuItem>
                                            <MenuItem value={"RESTAURANT"}>Resturant</MenuItem>
                                            <MenuItem value={"VACATION"}>Vacation</MenuItem>
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
export default CouponItemEdit;