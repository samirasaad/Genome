import React from "react";

const InputField = ({
  type,
  label: { labelText, labelClasses },
  input: { inputClasses, placeholder, name, id, type },
}) => {
  return (
    <div className="form-group fv-plugins-icon-container">
      <label className={`label-text ${labelClasses}`}>{labelText}</label>
      <input
        placeholder={placeholder}
        type={type}
        className={className}
        name={name}
        //   {...formik.getFieldProps("email")}
      />
      {/* {formik.touched[name] && formik.errors.email ? (
        <div className="fv-plugins-message-container">
          <div className="fv-help-block">{formik.errors.email}</div>
        </div>
      ) : null} */}
    </div>
  );
};

export default InputField;
