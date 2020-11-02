import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCurrentUser } from "../redux/user/user.selectors";

import SearchBox from "./search-box.component";

const DashboardHeader = ({ title, currentUser }) => (
    <div className="dashboard__header">
        <span className="dashboard__title">{title}</span>
        <SearchBox icon="fas fa-search" type="search" name="keyword" placeholder="Tìm kiếm" />
        <div className="admin">
            <div className="basic__info">
                <span className="admin__name">{currentUser.displayName}</span>
                <span className="sign__out">Đăng xuất</span>
            </div>
            <img src={currentUser.imageUrl} width="60" height="60" alt="avatar" />
        </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(DashboardHeader);
