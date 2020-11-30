import React from "react";

import Place from "./place.component";

const History = ({ item: { requestId, status, isOther, destination } }) => (
    <div class="history">
        <span class="title">Yêu cầu {requestId}</span>
        <div class="overview">
            <span class="type">{isOther ? "Đặt cho người khác" : "Đặt cho bản thân"}</span>
            <span class="status">{status}</span>
        </div>
        <Place item={destination} title="Điểm đến" />
    </div>
);

export default History;
