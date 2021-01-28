import React from "react";

const mapColor = {
    1: { fg: "#00cc3a", bg: "rgba(0, 204, 58, 0.1)" },
    true: { fg: "#00cc3a", bg: "rgba(0, 204, 58, 0.1)" },
    0: { fg: "#e73b1d", bg: "rgba(231, 59, 29, 0.1)" },
    false: { fg: "#e73b1d", bg: "rgba(231, 59, 29, 0.1)" }
};

const RequesterRow = ({
    displayName,
    imageUrl,
    phone,
    dateCreated,
    status,
    numOfRequests,
    successRate,
    viewDetails,
    grantPermission
}) => (
    <div className="table__content__row">
        <span className="table__content__col col__mix col__20">
            <img src={imageUrl} alt="driver" />
            <span className="name">{displayName}</span>
        </span>
        <span className="table__content__col col__10">{phone}</span>
        <span className="table__content__col col__7">
            {new Date(dateCreated).toLocaleDateString("vi-VN")}
        </span>
        <span className="table__content__col col__7">{numOfRequests}</span>
        <span className="table__content__col col__10">
            {successRate ? `${successRate.toFixed(2)}%` : "Đang cập nhật"}
        </span>
        <span className="table__content__col col__10 status">
            {displayName ? (
                <span
                    className="status__value"
                    style={{
                        color: mapColor[status].fg,
                        background: mapColor[status].bg,
                        fontWeight: "bold"
                    }}
                >
                    {status ? "Đang hoạt động" : "Ngưng hoạt động"}
                </span>
            ) : null}
        </span>
        <span className="table__content__action">
            <i onClick={viewDetails} className="fas fa-info-circle"></i>
            <i
                onClick={grantPermission}
                className={`fas ${status ? "fa-minus-circle" : "fa-check-circle"}`}
            ></i>
        </span>
    </div>
);

export default RequesterRow;
