import React from "react";

const mapColor = {
    "Đang hoạt động": { fg: "#126454", bg: "rgba(14, 100, 84, 0.1)" },
    "Hủy đăng ký": { fg: "#e73b1d", bg: "rgba(231, 59, 29, 0.1)" },
    "Bị hủy bỏ": { fg: "#e73b1d", bg: "rgba(231, 59, 29, 0.1)" },
    "Chờ xác nhận": { fg: "#4fe8e9", bg: "rgba(79, 168, 233, 0.1)" }
};

const AmbulanceRow = ({
    driverName,
    driverImage,
    licensePlate,
    registrationDate,
    expirationDate,
    status,
    viewDetails
}) => (
    <div className="table__content__row">
        <span className="table__content__col col__10">{licensePlate}</span>
        <span className="table__content__col col__mix col__25">
            <img src={driverImage} alt="driver" />
            <span className="name">{driverName}</span>
        </span>
        <span className="table__content__col col__10">{registrationDate}</span>
        <span className="table__content__col col__15">{expirationDate || "Đang cập nhật"}</span>
        <span className="table__content__col col__10 status">
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
            <i
                onClick={viewDetails}
                className={`fas ${
                    status === "Chờ xác nhận" ? "fa-question-circle" : "fa-info-circle"
                }`}
            ></i>
        </span>
    </div>
);

export default AmbulanceRow;
