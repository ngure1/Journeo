    // src/form-component/FormInputText.tsx
    import { Controller,Control } from "react-hook-form";
    import TextField from "@mui/material/TextField";
    import type { FormInputProps } from "./FormInputProps";
    export  const FormInputText = ({ name, control, label,size,variant, }: FormInputProps) => {
    return (
        <Controller
        name={name}
        control={control}
        render={({
            field: { onChange, value },
            fieldState: { error },
            formState,
        }) => (
            <TextField
            helperText={error ? error.message : null}
            size={size}
            error={!!error}
            onChange={onChange}
            value={value}
            fullWidth
            label={label}
            variant={variant}
            />
        )}
        />
    );
    };