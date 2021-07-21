import React from "react";

import Rating from "./rating.component";

const DriverInfo = ({ item: { driver, ratingDriver, ambulance } }) => (
    <div className="section__info">
        <div className="section__info__item">
            <span className="title">Tài xế</span>
            <Rating level={ratingDriver} />
            <span className="driver__name">{driver ? driver.displayName : "Không có thông tin"}</span>
        </div>
        <div className="section__info__item">
            <span className="title">Thông tin xe</span>
            <span className="license__plate">{ambulance ? ambulance.licensePlate : "Không có thông tin"}</span>
        </div>
    </div>
);

export default DriverInfo;
