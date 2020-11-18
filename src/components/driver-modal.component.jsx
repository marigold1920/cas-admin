import React from "react";
import FeedbackItem from "./feedback-item.component";

const DriverModal = ({ item }) => {
  return (
    <div>
      <span className="content__title">Ảnh đại diện</span>
        {item.map((feedback) => (
            <div className="section__info" key={feedback.requestId}>
            <FeedbackItem
                requestId={feedback.requestId}
                requesterDisplayName={feedback.requesterDisplayName}
                title="Góp ý cho tài xế"
                level={feedback.ratingDriver || ''}
                feedback={feedback.feedbackDriver || ""}
            />
        </div>
        ))}
    </div>
  );
};

export default DriverModal;
