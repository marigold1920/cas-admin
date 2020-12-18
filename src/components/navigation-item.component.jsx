import React from "react";

const NavigationItem = ({ label, icon, isActive }) => (
    <div className={`nav__item ${isActive ? "active" : ""}`}>
        <i className={icon}></i>
        {/* <span className="label">{label}</span> */}
    </div>
);

export default NavigationItem;
