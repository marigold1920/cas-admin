import React from "react";

import Rating from "./rating.component";

const FeedbackItem = ({ title, level, feedback, imageUrl, requestId }) => (
    <div className={`section__info__item ${imageUrl ? "content__row" : ""}`}>
        {imageUrl && <img className="user__image" src={imageUrl} alt="requester" />}
        <div className="user__feedback">
            <div className="header">
                <span className="title">{title}</span>
                {requestId && <span className="badge">Yêu cầu {requestId}</span>}
            </div>
            <Rating level={level} />
            <div className="item">
                <span className="value">{feedback}</span>
            </div>
        </div>
    </div>
);

export default FeedbackItem;
