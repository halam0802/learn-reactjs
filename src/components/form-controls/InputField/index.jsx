import React from "react";
import PropTypes from "prop-types";
import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";

InputField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
};

function InputField(props) {
  const { form, name, label, disabled } = props;

  const {
    formState: { errors },
  } = form;

  const hasError = typeof errors !== "undefined" ? errors[name] : false;

  return (
    <Controller
      name={name}
      control={form.control}
      render={({ field }) => (
        <TextField
          fullWidth
          variant="outlined"
          label={label}
          disabled={disabled}
          error={!!hasError}
          helperText={
            typeof errors !== "undefined" ? errors[name]?.message : ""
          }
          margin="dense"
          {...field}
        />
      )}
    />
  );
}

export default InputField;
