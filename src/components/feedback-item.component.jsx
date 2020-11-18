import React from "react";

import Rating from "./rating.component";

const FeedbackItem = ({
  title,
  level,
  feedback,
  requestId,
  requesterDisplayName,
}) => (
  <div className="section__info__item">
    {requestId && requesterDisplayName ? (
      <>
        <div className="item">
          <span className="value">Mã yêu cầu: {requestId}</span>
          <span className="value">Người gửi yêu cầu: {requesterDisplayName}</span>
        </div>
      </>
    ) : null}
    <span className="title">{title}</span>
    <Rating level={level} />
    <div className="item">
      <span className="value">{feedback}</span>
    </div>
  </div>
);

export default FeedbackItem;
