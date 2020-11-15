import React from "react";

const DateTime = ({ date, time }) => (
    <div className="date__time">
        <div className="item">
            <img src="https://i.ibb.co/5YkTvzp/date.png" alt="date" />
            <span className="value">{date}</span>
        </div>
        <div className="item">
            <img src="https://i.ibb.co/BKRjhx4/time.png" alt="time" />
            <span className="value">{time}</span>
        </div>
    </div>
);

export default DateTime;
