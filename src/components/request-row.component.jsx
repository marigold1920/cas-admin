import React from "react";

const RequestRow = ({
    item: {
        requesterName,
        requesterImage,
        driverName,
        driverImage,
        licensePlate,
        typeRequest,
        typeTransport,
        status
    }
}) => (
    <div className="table__content__row">
        <span className="table__content__col col__mix col__13">
            <img src={requesterImage} alt="requester" />
            <span className="name">{requesterName}</span>
        </span>
        <span className="table__content__col col__mix col__13">
            <img src={driverImage} alt="driver" />
            <span className="name">{driverName}</span>
        </span>
        <span className="table__content__col col__10">{licensePlate}</span>
        <span className="table__content__col col__13">{typeRequest}</span>
        <span className="table__content__col col__10">{typeTransport}</span>
        <span className="table__content__col col__13">{status}</span>
        <span className="table__content__action">
            <i className="fas fa-eye"></i>
        </span>
    </div>
);

export default RequestRow;
