import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { setActiveItem } from "../redux/table/table.actions";
import { selectActiveItem } from "../redux/table/table.selectors";
import { clearItem } from "../redux/data/data.actions";

import ApplicationName from "./application-name.component";
import NavigationItem from "./navigation-item.component";

const Navigation = ({ activeItem, setActiveItem, clearItem }) => {
    const items = [
        { route: "reports", icon: "fas fa-chart-line" },
        { route: "requests", label: "Yêu cầu", icon: "fas fa-history" },
        { route: "requesters", label: "Người gửi yêu cầu", icon: "fas fa-user-injured" },
        { route: "drivers", label: "Tài xế", icon: "fas fa-biking" },
        { route: "ambulances", label: "Xe cứu thương", icon: "fas fa-ambulance" }
    ];

    const handleOnClick = route => {
        clearItem();
        setActiveItem(route);
    };

    return (
        <section className="vertical__navigation">
            <ApplicationName name="CAS" logo="https://i.ibb.co/9H5ngdw/logo.png" />
            {items.map(({ route, label, icon }) => (
                <Link key={route} to="/dashboard" onClick={() => handleOnClick(route)}>
                    <NavigationItem label={label} icon={icon} isActive={route === activeItem} />
                </Link>
            ))}
        </section>
    );
};

const mapStateToProps = createStructuredSelector({
    activeItem: selectActiveItem
});

const mapDispatchToProps = dispatch => ({
    setActiveItem: label => dispatch(setActiveItem(label)),
    clearItem: () => dispatch(clearItem())
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
