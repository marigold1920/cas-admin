import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { fetchData, toggleLoading } from "../redux/data/data.actions";
import { selectActiveItem } from "../redux/table/table.selectors";
import { selectToken } from "../redux/user/user.selectors";

const Pagination = ({ actor, token, totalPage, currentPage, fetchData, toggleLoading }) => (
    <div className="pagination">
        {[...Array(totalPage)].map((page, index) => (
            <span
                onClick={() => {
                    toggleLoading();
                    fetchData(actor, token, index + 1);
                }}
                key={index}
                className={`pagination__item ${currentPage === index + 1 ? "active" : ""}`}
            >
                {index + 1}
            </span>
        ))}
    </div>
);

const mapStateToProps = createStructuredSelector({
    actor: selectActiveItem,
    token: selectToken
});

const mapDispatchToProps = dispatch => ({
    fetchData: (actor, token, pageIndex) => dispatch(fetchData(actor, token, pageIndex)),
    toggleLoading: () => dispatch(toggleLoading())
});

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
