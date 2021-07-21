import React from "react";

const mapColor = {
    "Thành công": { fg: "#00cc3a", bg: "rgba(0, 204, 58, 0.1)" },
    "Không thành công": { fg: "#e73b1d", bg: "rgba(231, 59, 29, 0.1)" },
    "Bị hủy bỏ": { fg: "#e73b1d", bg: "rgba(231, 59, 29, 0.1)" },
    "Đang xử lí": { fg: "#33b4b5", bg: "rgba(79, 232, 233, 0.1)" }
};

const RequestRow = ({
    requesterName,
    requesterImage,
    driverName,
    driverImage,
    licensePlate,
    typeRequest = "Đặt cho người khác",
    typeTransport = "Đến bệnh viện",
    status,
    viewDetails
}) => (
    <div className="table__content__row">
        <span className="table__content__col col__mix col__20">
            <img src={requesterImage} alt="requester" />
            <span className="name">{requesterName}</span>
        </span>
        {driverName ? (
            <span className="table__content__col col__mix col__20">
                <img src={driverImage} alt="driver" />
                <span className="name">{driverName}</span>
            </span>
        ) : (
            <span className="table__content__col col__20">
                <p className="noInfo">Đang cập nhật</p>
            </span>
        )}
        {licensePlate ? (
            <span className="table__content__col col__7">{licensePlate}</span>
        ) : (
            <span className="table__content__col col__7 noInfo">Đang cập nhật</span>
        )}
        <span className="table__content__col col__23">
            {typeTransport} - {typeRequest}
        </span>
        <span className="table__content__col col__13 status">
            {status ? (
                <span
                    className="status__value"
                    style={{
                        color: (mapColor[status] && mapColor[status].fg) || "#333",
                        background: (mapColor[status] && mapColor[status].bg) || "#f3f3f4",
                        fontWeight: "bold"
                    }}
                >
                    {status}
                </span>
            ) : null}
        </span>
        <span className="table__content__action">
            <i onClick={viewDetails} className="fas fa-info-circle"></i>
        </span>
    </div>
);

export default RequestRow;
