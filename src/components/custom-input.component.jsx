import React from "react";

const CustomInput = ({ icon, onChange, ...otherProps }) => (
    <div className="form__input">
        <i className={icon}></i>
        <input onChange={onChange} {...otherProps} />
    </div>
);

export default CustomInput;
