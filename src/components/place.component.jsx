import React from "react";

import DateTime from "./date-time.component";

const Place = ({ item: { name, address, date, time }, title, icon }) => (
    <div className="place">
        <div className="icon">
            <i className={`fas ${icon}`}></i>
            <span className="position__name">{title}</span>
        </div>
        <div className="place__details">
            <span className="place__name">{name}</span>
            <span className="address">{address}</span>
            <DateTime date={date || "-"} time={time || "-"} />
        </div>
    </div>
);

export default Place;
