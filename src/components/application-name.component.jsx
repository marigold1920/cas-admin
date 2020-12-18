import React from "react";

const ApplicationName = ({ name, logo, action }) => (
    <div onClick={action} className="application__name">
        {/* <img src={logo} alt="application logo" /> */}
        <span className="name">{name}</span>
    </div>
);

export default ApplicationName;
