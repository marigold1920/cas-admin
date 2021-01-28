import React from "react";

const ConfigItem = ({ description, itemId, validation, ...otherProps }) => (
    <div className="item">
        <p>{description}</p>
        <span style={{ color: "#ff0000" }}>{validation[itemId]}</span>
        <input {...otherProps} />
    </div>
);

export default ConfigItem;
