import React from "react";

const ErrMsg = ({ contentClasses, parentClasses, content }) => {
  return (
    <div className={`fv-plugins-message-container ${parentClasses}`}>
      <div className={`${contentClasses} small text-danger semiBold-font `}>
        {content}
      </div>
    </div>
  );
};

export default ErrMsg;
