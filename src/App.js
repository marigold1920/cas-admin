import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCurrentUser } from "./redux/user/user.selectors";

import Spinner from "./components/spinner.component";

import "./App.css";

const LoginPage = lazy(() => import("./pages/login.component"));
const HomePage = lazy(() => import("./pages/home.component"));

const App = ({ currentUser }) => {
    return (
        <Switch>
            <Suspense fallback={<Spinner />}>
                <Route exact path="/dashboard" component={HomePage} />
                <Route
                    exact
                    path="/"
                    render={() => (currentUser ? <Redirect to="/dashboard" /> : <LoginPage />)}
                />
            </Suspense>
        </Switch>
    );
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(App);
