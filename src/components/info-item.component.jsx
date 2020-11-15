import React from "react";

const InfoItem = ({ title, value, customStyle }) => (
    <div className={customStyle}>
        <span>{title}</span>
        <span className="value">{value}</span>
    </div>
);

export default InfoItem;
