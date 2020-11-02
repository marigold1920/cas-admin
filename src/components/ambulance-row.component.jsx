import React from "react";

const AmbulanceRow = ({
    item: { driverName, driverImage, licensePlate, registrationDate, expirationDate, status }
}) => (
    <div className="table__content__row">
        <span className="table__content__col col__10">{licensePlate}</span>
        <span className="table__content__col col__mix col__20">
            <img src={driverImage} alt="driver" />
            <span className="name">{driverName}</span>
        </span>
        <span className="table__content__col col__10">{registrationDate}</span>
        <span className="table__content__col col__15">{expirationDate}</span>
        <span className="table__content__col col__10">{status}</span>
        <span className="table__content__action">
            <i className="fas fa-ban"></i>
            <i className="fas fa-eye"></i>
        </span>
    </div>
);

export default AmbulanceRow;
