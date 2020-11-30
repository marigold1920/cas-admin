import React from "react";

import FeedbackDriver from "./feedback-driver.component";

const DriverDetails = ({ item }) => (
    <>
        <span className="title">Phản hồi từ người dùng</span>
        {item.length ? (
            item.map(({ requestId, ...otherProps }) => (
                <FeedbackDriver key={requestId} {...otherProps} />
            ))
        ) : (
            <span className="empty__message">Không có phản hồi từ người dùng</span>
        )}
    </>
);

export default DriverDetails;
