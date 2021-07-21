import React from "react";

import Rating from "./rating.component";

const DriverInfo = ({ item: { driver, ratingDriver, ambulance } }) => (
    <div className="section__info">
        <div className="section__info__item">
            <span className="title">Tài xế</span>
            <Rating level={driverRating} />
            <span className="driver__name">{driverName}</span>
        </div>
        <div className="section__info__item">
            <span className="title">Thông tin xe</span>
            <span className="license__plate">{licensePlate}</span>
        </div>
    </div>
);

export default DriverInfo;
