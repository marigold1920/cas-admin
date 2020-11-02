import React from "react";

const SearchBox = ({ action, icon, ...otherProps }) => (
    <div className="search__box">
        <i className="fas fa-search" onClick={action}></i>
        <input {...otherProps} />
    </div>
);

export default SearchBox;
