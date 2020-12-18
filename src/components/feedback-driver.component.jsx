import React from "react";

import Rating from "./rating.component";

const FeedbackDriver = ({ requestName, requesterImage, ratingDriver, feedbackDriver }) => (
    <div class="feedback__item">
        <div class="requester">
            <img src={requesterImage} alt="requester" />
            <div class="feedback">
                <span class="requester__name">{requestName}</span>
                <span class="description">{feedbackDriver}</span>
                <Rating level={ratingDriver} />
            </div>
        </div>
    </div>
);

export default FeedbackDriver;
