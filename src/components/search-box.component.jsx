import React, { useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { fetchData } from "../redux/data/data.actions";
import { setKeyword } from "../redux/table/table.actions";
import { selectToken } from "../redux/user/user.selectors";
import { selectFilterItem, selectActiveItem } from "../redux/table/table.selectors";

const SearchBox = ({ token, filterItem, activeItem, fetchData, setKeyword, ...otherProps }) => {
    const [keyword, setKey] = useState("");

    const handleOnChange = event => {
        const { value } = event.target;

        setKey(value);
    };

    const handleSearch = () => {
        setKeyword(keyword);
        fetchData(activeItem, token, 1, filterItem === "Tất cả" ? "" : filterItem, keyword);
    };

    return (
        <div className="search__box">
            <i className="fas fa-search" onClick={handleSearch}></i>
            <input defaultValue={keyword} onChange={handleOnChange} {...otherProps} />
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    token: selectToken,
    filterItem: selectFilterItem,
    activeItem: selectActiveItem
});

const mapDispatchToProps = dispatch => ({
    fetchData: (actor, token, pageIndex, status, keyword) =>
        dispatch(fetchData(actor, token, pageIndex, status, keyword)),
    setKeyword: keyword => dispatch(setKeyword(keyword))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
