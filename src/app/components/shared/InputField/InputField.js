import React from "react";
import { useState } from "react";
import { injectIntl } from "react-intl";
import "./InputField.scss";

const InputField = ({
  intl,
  eyeId,
  parentClasses,
  error,
  label: { labelText, labelClasses },
  input: { type, inputClasses, placeholderId, name, id, isRequired },
  ...resetProps
}) => {
  const [isPreview, setIsPreview] = useState(false);
  const placeholderrrr = placeholderId
    ? intl.formatMessage({ id: placeholderId })
    : "";

  const previewPassword = (e, inputId) => {
    setIsPreview(!isPreview);
    let inputElem = document.querySelector(`#${inputId}`);
    isPreview
      ? inputElem.setAttribute("type", "password")
      : inputElem.setAttribute("type", "text");
  };

  return (
    <div
      className={`position-relative ${parentClasses} form-group fv-plugins-icon-container`}
    >
      <label className={`label-text ${labelClasses}`}>
        {labelText}
        {isRequired && <span className="text-danger">*</span>}
      </label>
      <input
        id={id}
        placeholder={placeholderrrr || ""}
        type={type}
        className={`${inputClasses}`}
        name={name}
        {...resetProps}
      />

      {error ? (
        <div className="fv-plugins-message-container">
          <div className="fv-help-block">{error}</div>
        </div>
      ) : null}

      {type === "password" &&
        (isPreview ? (
          <i
            className="far fa-eye password-eye position-absolute cursor-pointer"
            id={eyeId}
            onClick={(e) => previewPassword(e, id)}
          ></i>
        ) : (
          <i
            className="far fa-eye-slash password-eye position-absolute cursor-pointer"
            id={eyeId}
            onClick={(e) => previewPassword(e, id)}
          ></i>
        ))}
    </div>
  );
};

export default injectIntl(InputField);
