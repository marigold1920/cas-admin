import React, { useEffect } from "react";
import { Switch } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCurrentUser, selectToken } from "./redux/user/user.selectors";
import { selectCurrentItem, selectCurrentItemId } from "./redux/data/data.selectors";
import { selectActiveItem } from "./redux/table/table.selectors";
import { fetchItemDetails } from "./redux/data/data.actions";

import LoginPage from "./pages/login.component";
import DashboardPage from "./pages/dashboard.component";
import Navigation from "./components/navigation.component";
import RequestModal from "./components/request-modal.component";
import Modal from "./components/modal.component";

import "./App.css";

const App = ({ currentUser, currentItemId, currentItem, activeItem, token }) => {
    useEffect(() => {
        currentItemId && fetchItemDetails(token, activeItem, currentItemId);
    }, [activeItem, currentItemId, token]);

    return (
        <Switch>
            {currentUser ? (
                <div className="index__page">
                    <Navigation />
                    <DashboardPage />
                    <Modal title="Chi tiết yêu cầu" visible={!!currentItem}>
                        {activeItem === "requests" && currentItem && (
                            <RequestModal item={currentItem} />
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
    currentItemId: selectCurrentItemId,
    currentItem: selectCurrentItem,
    activeItem: selectActiveItem,
    token: selectToken
});

export default connect(mapStateToProps)(App);
