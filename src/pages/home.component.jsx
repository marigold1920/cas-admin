import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectActiveItem } from "../redux/table/table.selectors";
import { selectToken } from "../redux/user/user.selectors";
import { fetchData } from "../redux/data/data.actions";

import Management from "../components/management.component";
import Report from "../components/report.component";
import Navigation from "../components/navigation.component";

const HomePage = ({ activeItem, token, fetchData }) => {
    useEffect(() => {
        fetchData(activeItem, token);
    }, [fetchData, token, activeItem]);

    return (
        <div className="index__page">
            <Navigation />
            {activeItem !== "reports" ? <Management /> : <Report />}
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    activeItem: selectActiveItem,
    token: selectToken
});

const mapDispatchToProps = dispatch => ({
    fetchData: (activeItem, token) => dispatch(fetchData(activeItem, token))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
