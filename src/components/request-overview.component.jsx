import React from "react";

import InfoItem from "./info-item.component";

const RequestOverview = ({ status, requestType, transportType }) => (
    <div className="section__info">
        <InfoItem customStyle="section__info__item base33" title="Trạng thái" value={status} />
        <InfoItem
            customStyle="section__info__item base33"
            title="Loại yêu cầu"
            value={requestType}
        />
        <InfoItem
            customStyle="section__info__item base33"
            title="Loại vận chuyển"
            value={transportType}
        />
    </div>
);

export default RequestOverview;
