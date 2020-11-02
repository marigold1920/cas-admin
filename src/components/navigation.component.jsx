import React, { useState } from "react";
import { Link } from "react-router-dom";

import ApplicationName from "./application-name.component";
import NavigationItem from "./navigation-item.component";

const Navigation = () => {
    const [activeItem, setActiveItem] = useState("Bệnh khách");
    const items = [
        { route: "/", label: "Trang chủ", icon: "fas fa-chart-line" },
        { route: "/requesters", label: "Bệnh khách", icon: "fas fa-user-injured" },
        { route: "/drivers", label: "Tài xế", icon: "fas fa-biking" },
        { route: "/ambulances", label: "Xe cứu thương", icon: "fas fa-ambulance" },
        { route: "/requests", label: "Yêu cầu", icon: "fas fa-history" },
        { route: "/systems", label: "Hệ thống", icon: "fas fa-cogs" }
    ];

    return (
        <section className="vertical__navigation">
            <ApplicationName name="CAS" logo="https://i.ibb.co/9H5ngdw/logo.png" />
            {items.map(({ route, label, icon }) => (
                <Link
                    key={route}
                    onClick={() => setActiveItem(label)}
                    to={route}
                    style={{ color: "#000" }}
                >
                    <NavigationItem label={label} icon={icon} isActive={label === activeItem} />
                </Link>
            ))}
        </section>
    );
};

export default Navigation;
