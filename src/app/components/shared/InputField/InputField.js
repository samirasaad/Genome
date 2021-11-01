import React from "react";
import { injectIntl, intlShape } from "react-intl";

const InputField = ({
  intl,
  type,
  parentClasses,
  label: { labelText, labelClasses },
  input: { inputClasses, placeholderId, name, id, isRequired },
}) => {
  console.log(placeholderId);
  const placeholderrrr = placeholderId
    ? intl.formatMessage({ id: placeholderId })
    : "";
  return (
    <div className={` ${parentClasses} form-group fv-plugins-icon-container`}>
      <label className={`label-text ${labelClasses}`}>
        {labelText}
        {isRequired && <span className="text-danger">*</span>}
      </label>
      <input
        placeholder={placeholderrrr || ""}
        type={type}
        className={inputClasses}
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

export default injectIntl(InputField);
