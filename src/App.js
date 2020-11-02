import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCurrentUser } from "./redux/user/user.selectors";

import LoginPage from "./pages/login.component";
import DashboardPage from "./pages/dashboard.component";
import RequesterPage from "./pages/requester.component";
import RequestPage from "./pages/request.component";
import DriverPage from "./pages/driver.component";
import AmbulancePage from "./pages/ambulance.component";
import Navigation from "./components/navigation.component";

import "./App.css";

const App = ({ currentUser }) => (
    <Switch>
        {currentUser ? (
            <div className="index__page">
                <Navigation />
                <Redirect from="/" to="requesters" />
                <Route exact path="/" component={DashboardPage} />
                <Route path="/requesters" component={RequesterPage} />
                <Route path="/requests" component={RequestPage} />
                <Route path="/drivers" component={DriverPage} />
                <Route path="/ambulances" component={AmbulancePage} />
            </div>
        ) : (
            <>
                <Redirect from="/" to="/signin" />
                <LoginPage />
            </>
        )}
    </Switch>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(App);
