import React from "react";

const Filter = ({ items, activeItem, setItem }) => (
    <div className="filter">
        {items.map((item, index) => (
            <span
                key={index}
                onClick={() => setItem(item)}
                className={`filter__item ${activeItem === item ? "active" : ""}`}
            >
                {item}
            </span>
        ))}
    </div>
);

export default Filter;
