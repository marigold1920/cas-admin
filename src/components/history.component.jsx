import React from "react";

import Place from "./place.component";

const History = ({ item: { requestId, status, isOther, destination } }) => (
    <div className="history">
        <span className="title">Yêu cầu {requestId}</span>
        <div className="overview">
            <span className="type">{isOther ? "Đặt cho người khác" : "Đặt cho bản thân"}</span>
            <span className="status">{status}</span>
        </div>
        <Place icon="fas fa-map-marker-alt" item={destination} title="Điểm đến" />
    </div>
);

export default History;
