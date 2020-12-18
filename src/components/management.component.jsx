import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCurrentUser } from "../redux/user/user.selectors";
import { selectCurrentItem } from "../redux/data/data.selectors";
import { selectActiveItem } from "../redux/table/table.selectors";

import Dashboard from "./dashboard.component";
import RequestModal from "./request-modal.component";
import Modal from "./modal.component";
import AmbulanceModal from "./ambulance-modal.component";

const titles = {
    requests: "Chi tiết yêu cầu",
    requesters: "Chi tiết bệnh khách",
    drivers: "Nhận xét từ người dùng",
    ambulances: "Hồ sơ đã đăng ký"
};

const Management = ({ activeItem, currentItem }) => (
    <>
        <Dashboard />
        <Modal
            title={titles[activeItem]}
            visible={!!currentItem && (activeItem === "requests" || activeItem === "ambulances")}
        >
            {activeItem === "requests" && currentItem && <RequestModal item={currentItem} />}
            {activeItem === "ambulances" && currentItem && <AmbulanceModal item={currentItem} />}
        </Modal>
    </>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    currentItem: selectCurrentItem,
    activeItem: selectActiveItem
});

export default connect(mapStateToProps)(Management);
