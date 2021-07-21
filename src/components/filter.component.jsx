import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { setFilterItem } from "../redux/table/table.actions";
import { fetchData, toggleLoading } from "../redux/data/data.actions";
import { selectActiveItem, selectKeyword } from "../redux/table/table.selectors";
import { selectToken } from "../redux/user/user.selectors";

import { filterItems } from "../utils/title.data";

const Filter = ({ activeItem, token, keyword, fetchData, toggleLoading, setFilterItem }) => {
    const [currentItem, setCurrentItem] = useState(filterItems[activeItem][0]);

    useEffect(() => {
        setCurrentItem("Tất cả");
    }, [activeItem]);

    const handleFilterItemChange = item => {
        setFilterItem(item);
        toggleLoading(true);
        setCurrentItem(item);
        fetchData(activeItem, token, 1, item === "Tất cả" ? "" : item, keyword);
    };

    return (
        <div className="filter">
            {filterItems[activeItem].map((item, index) => (
                <span
                    key={index}
                    onClick={() => handleFilterItemChange(item)}
                    className={`filter__item ${currentItem === item ? "active" : ""}`}
                >
                    {item}
                </span>
            ))}
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    activeItem: selectActiveItem,
    token: selectToken,
    keyword: selectKeyword
});

const mapDispatchToProps = dispatch => ({
    fetchData: (actor, token, pageIndex, status, keyword) =>
        dispatch(fetchData(actor, token, pageIndex, status, keyword)),
    toggleLoading: () => dispatch(toggleLoading()),
    setFilterItem: item => dispatch(setFilterItem(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
