import React from "react";

const Btn = ({ disabled, content, className, type, handleClick }) => {
  return (
    <button
      disabled={disabled}
      className={className}
      type={type}
      onClick={handleClick}
    >
      {content}
    </button>
  );
};

export default Btn;
