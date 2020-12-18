import React from "react";

const StatusReport = ({ icon, value, description, name }) => (
    <div className="status__report">
        <img src={icon} alt="icon" />
        <h3>{value.toLowerCase().replace("thành phố", "")}</h3>
        <span>{description}</span>
        <span className="status__name">{name}</span>
    </div>
);

export default StatusReport;
