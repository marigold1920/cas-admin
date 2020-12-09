import React from "react";

const AmbulanceRowReport = ({
    driverImage,
    driverName,
    licensePlate,
    registrationDate,
    status
}) => (
    <div className="row">
        <div className="driver">
            <img src={driverImage} alt="driver" />
            <span>{driverName}</span>
        </div>
        <span className="license__plate">{licensePlate}</span>
        <span className="date">{registrationDate}</span>
        <span className="status">{status}</span>
    </div>
);

export default AmbulanceRowReport;
