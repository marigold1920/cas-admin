import React from "react";

const AmbulanceRow = ({
    driverName,
    driverImage,
    licensePlate,
    registrationDate,
    expirationDate,
    status,
    viewDetails,
    grantPermission
}) => (
    <div className="table__content__row">
        <span className="table__content__col col__10">{licensePlate}</span>
        <span className="table__content__col col__mix col__25">
            <img src={driverImage} alt="driver" />
            <span className="name">{driverName}</span>
        </span>
        <span className="table__content__col col__10">{registrationDate}</span>
        <span className="table__content__col col__15">{expirationDate || "-"}</span>
        <span className="table__content__col col__10">{status}</span>
        <span className="table__content__action">
            <i
                onClick={viewDetails}
                className={`fas ${
                    status === "Chờ xác nhận" ? "fa-question-circle" : "fa-info-circle"
                }`}
            ></i>
            {status === "Đang hoạt động" && (
                <i onClick={grantPermission} className="fas fa-minus-circle"></i>
            )}
            {status === "Ngưng hoạt động" && (
                <i onClick={grantPermission} className="fas fa-check-circle"></i>
            )}
        </span>
    </div>
);

export default AmbulanceRow;
