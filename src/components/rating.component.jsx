import React from "react";

const Rating = ({ level }) => (
    <div className="rating">
        {level >= 0 && <i></i>}
        {level >= 1 && <i className="fas fa-heart"></i>}
        {level >= 2 && <i className="fas fa-heart"></i>}
        {level >= 3 && <i className="fas fa-heart"></i>}
        {level >= 4 && <i className="fas fa-heart"></i>}
        {level >= 5 && <i className="fas fa-heart"></i>}
    </div>
);

export default Rating;
