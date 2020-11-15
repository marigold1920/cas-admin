import React from "react";

import Rating from "./rating.component";

const FeedbackItem = ({ title, level, feedback }) => (
    <div className="section__info__item">
        <span className="title">{title}</span>
        <Rating level={level} />
        <div className="item">
            <span className="value">{feedback}</span>
        </div>
    </div>
);

export default FeedbackItem;
