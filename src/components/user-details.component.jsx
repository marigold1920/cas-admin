import React from "react";

import DriverDetails from "./driver-details.component";
import RequesterDetails from "./requester-details.component";

const UserDetails = ({ item, current, onClose, visible }) => (
    <div className={`user__details ${visible ? "visible" : ""}`}>
        {item && (
            <>
                <div className="header">
                    <span className="row__action disable">
                        {current === "drivers" ? "Chặn tài xế" : "Chặn người dùng"}
                    </span>
                    <i onClick={onClose} className="far fa-times-circle"></i>
                </div>
                {current === "drivers" ? (
                    <DriverDetails item={item} />
                ) : (
                    <RequesterDetails item={item} />
                )}
            </>
        )}
    </div>
);

export default UserDetails;
