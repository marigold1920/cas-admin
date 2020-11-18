import React from "react";
import { Switch } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCurrentUser } from "./redux/user/user.selectors";
import { selectCurrentItem } from "./redux/data/data.selectors";
import { selectActiveItem } from "./redux/table/table.selectors";

import LoginPage from "./pages/login.component";
import DashboardPage from "./pages/dashboard.component";
import Navigation from "./components/navigation.component";
import RequestModal from "./components/request-modal.component";
import RequesterModal from "./components/requester-modal.component";
import DriverModal from "./components/driver-modal.component";
import Modal from "./components/modal.component";

import "./App.css";

const titles = {
    requests: "Chi tiết yêu cầu",
    requesters: "Chi tiết bệnh khách",
    drivers: "Nhận xét từ người dùng"
};

const App = ({ currentUser, currentItem, activeItem }) => {
    return (
        <Switch>
            {currentUser ? (
                <div className="index__page">
                    <Navigation />
                    <DashboardPage />
                    <Modal title={titles[activeItem]} visible={!!currentItem}>
                        {activeItem === "requests" && currentItem && (
                            <RequestModal item={currentItem} />
                        )}
                        {activeItem === "requesters" && currentItem && (
                            <RequesterModal item={currentItem} />
                        )}
                        {activeItem === "drivers" && currentItem && (
                            <DriverModal item={currentItem} />
                        )}
                    </Modal>
                </div>
            ) : (
                <LoginPage />
            )}
        </Switch>
    );
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    currentItem: selectCurrentItem,
    activeItem: selectActiveItem
});

export default connect(mapStateToProps)(App);
