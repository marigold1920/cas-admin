import React from "react";

const Pagination = ({ totalPage, currentPage }) => (
    <div className="pagination">
        {[...Array(totalPage)].map((page, index) => (
            <span className={`pagination__item ${currentPage === index + 1 ? "active" : ""}`}>
                {index + 1}
            </span>
        ))}
    </div>
);

export default Pagination;
