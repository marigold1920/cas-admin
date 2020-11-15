import React from "react";

import Rating from "./rating.component";

const DriverInfo = ({ item: { driverName, driverRating, ambulanceImages, licensePlate } }) => (
    <div className="section__info">
        <div className="section__info__item">
            <span className="title">Tài xế</span>
            <Rating level={driverRating} />
            <span className="driver__name">{driverName}</span>
        </div>
        <div className="section__info__item">
            <span className="title">Thông tin xe</span>
            <span className="license__plate">{licensePlate}</span>
            <div className="ambulance__images">
                {ambulanceImages.length &&
                    ambulanceImages.map((image, index) => (
                        <img key={index} src={image} alt="ambulance" />
                    ))}
            </div>
        </div>
    </div>
);

export default DriverInfo;
