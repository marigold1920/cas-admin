import React from "react";

const RequestRow = ({
    requesterName,
    requesterImage,
    driverName,
    driverImage,
    licensePlate,
    typeRequest = "Đặt cho người khác",
    typeTransport = "Đi cấp cứu",
    status,
    viewDetails
}) => (
    <div className="table__content__row">
        <span className="table__content__col col__mix col__20">
            <img src={requesterImage} alt="requester" />
            <span className="name">{requesterName}</span>
        </span>
        <span className="table__content__col col__mix col__20">
            <img src={driverImage} alt="driver" />
            <span className="name">{driverName}</span>
        </span>
        <span className="table__content__col col__7">{licensePlate}</span>
        <span className="table__content__col col__13">{typeRequest}</span>
        <span className="table__content__col col__10">{typeTransport}</span>
        <span className="table__content__col col__13">{status}</span>
        <span className="table__content__action">
            {/* <i onClick={action} className="fas fa-eye"></i> */}
            <span onClick={viewDetails} className="row__action details">
                Chi tiết
            </span>
        </span>
    </div>
);

export default RequestRow;
