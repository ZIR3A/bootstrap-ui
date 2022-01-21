import React from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import "./InputField.css";
export const InputFields = ({
  size = "md",
  width = "md",
  label,
  name,
  onChange,
  readOnly,
  type,
  required,
  maxLength,
  minLength,
  value,
  validator,
  ...others
}) => {
  let scale = 1;
  let length = 50;
  if (size === "sm") scale = 0.75;
  if (size === "lg") scale = 1.5;
  if (width === "sm") length = 25;
  if (width === "lg") length = 100;
  //   const style = {
  //     padding: `${scale * 0.5}rem ${scale * 1}rem`,
  //     width: `${length}%`,
  //   };
  return (
    <>
      <div className={`flex-fill mx-1 my-2 w-${length}`}>
        <label htmlFor="inputForms" className="form-label opacity-75">
          {label ? label : ""}
          {required && (
            <span className="text-danger h6 ml-1">
              <b>*</b>
            </span>
          )}
        </label>
        <input
          className="form-control"
          placeholder={label}
          name={name}
          id={name}
          type={type}
          value={value}
          required={required}
          {...(maxLength
            ? {
                max: maxLength,
              }
            : {})}
          {...(minLength
            ? {
                min: minLength,
              }
            : {})}
          onChange={onChange}
          readOnly={readOnly}
          {...others}
        />
      </div>
    </>
  );
};

InputFields.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  readOnly: PropTypes.bool,
  type: PropTypes.string,
  required: PropTypes.bool,
  maxLength: PropTypes.number,
  minLength: PropTypes.number,
  value: PropTypes.string,
  width: PropTypes.oneOf(["sm", "md", "lg"]),
  onChange: PropTypes.func,
};
