import React from "react";

const ConfigItem = ({ description, ...otherProps }) => (
    <div className="item">
        <p>{description}</p>
        <input {...otherProps} />
    </div>
);

export default ConfigItem;
