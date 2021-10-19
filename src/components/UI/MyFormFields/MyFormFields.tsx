import { FormHelperText, Select, TextField } from "@mui/material";
import { FieldAttributes, useField } from "formik";

type MyTextFieldProps = { label: string, type: string } & FieldAttributes<{}>;
export const MyTextField: React.FC<MyTextFieldProps> = ({ label, type, ...props }) => {
    const [field, meta] = useField<{}>(props);
    const errorText = meta.error && meta.touched ? meta.error : "";
    const inputLabelProps = type==='date'? {shrink:true} : {};

    return (
        <TextField {...field} type={type} helperText={errorText} label={label} error={!!errorText}
        InputLabelProps={inputLabelProps}
        />
    )
}

type MySelectFieldProps = { label: string, labelId: string } & FieldAttributes<{}>;
export const MySelectField: React.FC<MySelectFieldProps> = ({ label, labelId, ...props }) => {
    const [field, meta] = useField<{}>(props);
    const errorText = meta.error && meta.touched ? meta.error : "";

    return (
        <>
            <Select {...field} labelId={labelId} label={label} error={!!errorText}>{props.children} </Select>
            <FormHelperText error={!!errorText}>{errorText}</FormHelperText>
        </>
    )
}