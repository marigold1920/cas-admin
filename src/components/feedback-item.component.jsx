import React from "react";

import Rating from "./rating.component";

const FeedbackItem = ({ title, level = 5, feedback }) => (
    <div className="feedback__request__item">
        <span className="title">{title}</span>
        <Rating level={level} />
        <span className="feedback">{feedback}</span>
    </div>
);

export default FeedbackItem;
