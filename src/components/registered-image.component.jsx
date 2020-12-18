import React from "react";

const RegisteredImage = ({ imageUrl, title, isActive, ...otherProps }) => (
    <div className="registered__item">
        <img src={imageUrl} alt="item" />
        <span className="image__title">{title}</span>
        {isActive && <input type="text" placeholder="Ghi chú" {...otherProps} />}
    </div>
);

export default RegisteredImage;
