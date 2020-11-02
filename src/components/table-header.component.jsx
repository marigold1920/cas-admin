import React from "react";

const TableHeader = ({ items, sizes }) => (
    <div className="table__header">
        {items.map((item, index) => (
            <span className={`table__header__label ${sizes[index]}`}>{item}</span>
        ))}
    </div>
);

export default TableHeader;
