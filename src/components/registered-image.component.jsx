import React from "react";

const RegisteredImage = ({ imageUrl, title, isActive, ...otherProps }) => (
    <div className="registered__item">
        <a href={imageUrl} target="_blank">
            <img src={imageUrl} alt="item" />
        </a>
        <span className="image__title">{title}</span>
        {isActive && <textarea type="text" placeholder="Ghi chú" {...otherProps} />}
    </div>
);

export default RegisteredImage;
