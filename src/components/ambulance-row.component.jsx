import React from "react";

const AmbulanceRow = ({
    driverName,
    driverImage,
    licensePlate,
    registrationDate,
    expirationDate,
    status
}) => (
    <div className="table__content__row">
        <span className="table__content__col col__10">{licensePlate}</span>
        <span className="table__content__col col__mix col__25">
            <img src={driverImage} alt="driver" />
            <span className="name">{driverName}</span>
        </span>
        <span className="table__content__col col__10">{registrationDate}</span>
        <span className="table__content__col col__15">{expirationDate}</span>
        <span className="table__content__col col__10">
            {status ? "Đang hoạt động" : "Đã hủy đăng ký"}
        </span>
        <span className="table__content__action">
            <span className="row__action details">Chi tiết</span>
            <span className="row__action disable">Chặn</span>
        </span>
    </div>
);

export default AmbulanceRow;
