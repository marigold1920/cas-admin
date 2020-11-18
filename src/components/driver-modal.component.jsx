import React from "react";

import FeedbackItem from "./feedback-item.component";

const DriverModal = ({ item }) => {
    return (
        <div className="section__info">
            {item.length ? (
                item.map(
                    ({ requestId, requestName, requesterImage, ratingDriver, feedbackDriver }) => (
                        <FeedbackItem
                            key={requestId}
                            title={requestName}
                            imageUrl={requesterImage}
                            feedback={feedbackDriver}
                            level={ratingDriver}
                            requestId={requestId}
                        />
                    )
                )
            ) : (
                <span className="empty__message">Không có phản hồi từ người dùng</span>
            )}
        </div>
    );
};

export default DriverModal;
