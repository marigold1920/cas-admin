import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { setActiveItem } from "../redux/table/table.actions";
import { selectActiveItem } from "../redux/table/table.selectors";

import ApplicationName from "./application-name.component";
import NavigationItem from "./navigation-item.component";

const Navigation = ({ activeItem, setActiveItem }) => {
    const items = [
        { route: "dashboard", label: "Trang chủ", icon: "fas fa-chart-line" },
        { route: "requests", label: "Yêu cầu", icon: "fas fa-history" },
        { route: "requesters", label: "Bệnh khách", icon: "fas fa-user-injured" },
        { route: "drivers", label: "Tài xế", icon: "fas fa-biking" },
        { route: "ambulances", label: "Xe cứu thương", icon: "fas fa-ambulance" },
        { route: "systems", label: "Hệ thống", icon: "fas fa-cogs" }
    ];

    const handleOnClick = (route, label) => {
        setActiveItem(route);
    };

    return (
        <section className="vertical__navigation">
            <ApplicationName name="CAS" logo="https://i.ibb.co/9H5ngdw/logo.png" />
            {items.map(({ route, label, icon }) => (
                <Link
                    key={route}
                    onClick={() => handleOnClick(route, label)}
                    to={route}
                    style={{ color: "#000" }}
                >
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
    setActiveItem: label => dispatch(setActiveItem(label))
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
