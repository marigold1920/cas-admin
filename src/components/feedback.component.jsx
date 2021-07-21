import React from "react";

import FeedbackItem from "./feedback-item.component";

const Feedback = ({ item: { feedbackSerivce, feedbackDriver, ratingService, ratingDriver } }) => (
    <div className="section__info">
        <FeedbackItem
            title="Góp ý cho tài xế"
            level={ratingDriver}
            feedback={feedbackDriver || "Không có phản hồi về tài xế"}
        />
        <FeedbackItem
            title="Góp ý dịch vụ"
            level={ratingService}
            feedback={feedbackSerivce || "Không có phản hồi về dịch vụ"}
        />
    </div>
);

export default Feedback;
