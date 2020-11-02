import React from "react";

const RequesterRow = ({
    item: { displayName, imageUrl, phone, dateCreated, status, numOfRequest, successRate }
}) => (
    <div className="table__content__row">
        <span className="table__content__col col__mix col__20">
            <img src={imageUrl} alt="driver" />
            <span className="name">{displayName}</span>
        </span>
        <span className="table__content__col col__10">{phone}</span>
        <span className="table__content__col col__7">{dateCreated}</span>
        <span className="table__content__col col__10">{status}</span>
        <span className="table__content__col col__10">{numOfRequest}</span>
        <span className="table__content__col col__10">{successRate}%</span>
        <span className="table__content__action">
            <i className="fas fa-ban"></i>
            <i className="fas fa-eye"></i>
        </span>
    </div>
);

export default RequesterRow;
