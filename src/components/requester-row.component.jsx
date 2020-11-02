import React from "react";

const RequesterRow = ({
    displayName,
    imageUrl,
    phone,
    dateCreated,
    status,
    numOfRequests,
    successRate
}) => (
    <div className="table__content__row">
        <span className="table__content__col col__mix col__20">
            <img src={imageUrl} alt="driver" />
            <span className="name">{displayName}</span>
        </span>
        <span className="table__content__col col__10">{phone}</span>
        <span className="table__content__col col__7">{dateCreated}</span>
        <span className="table__content__col col__10">
            {status ? "Đang hoạt động" : "Ngưng hoạt động"}
        </span>
        <span className="table__content__col col__7">{numOfRequests}</span>
        <span className="table__content__col col__10">
            {successRate ? `${successRate}%` : "Không xác định"}
        </span>
        <span className="table__content__action">
            <i className="fas fa-ban"></i>
            <i className="fas fa-eye"></i>
        </span>
    </div>
);

export default RequesterRow;
