import React from "react";

const DateTime = ({ date, time }) => (
    <div className="date__time">
        <div className="item">
            <i className="far fa-calendar-alt"></i>
            <span className="value">{date}</span>
        </div>
        <div className="item">
            <i className="fas fa-history"></i>
            <span className="value">{time}</span>
        </div>
    </div>
);

export default DateTime;
