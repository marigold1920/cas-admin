import React from "react";

import History from "./history.component";

const RequesterDetails = ({ item }) => (
    <>
        <span className="title">Lịch sử gọi xe</span>
        {item.length ? (
            item.map(i => <History key={i.requestId} item={i} />)
        ) : (
            <span className="empty__message">Không có yêu cầu được gửi từ người dùng</span>
        )}
    </>
);

export default RequesterDetails;
