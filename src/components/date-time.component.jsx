import React from "react";

const DateTime = ({ date, time }) => (
    <div className="date__time">
        <div className="item">
            <i class="far fa-calendar-alt"></i>
            <span className="value">{date}</span>
        </div>
        <div className="item">
            <i class="fas fa-history"></i>
            <span className="value">{time}</span>
        </div>
    </div>
);

export default DateTime;
