import React from "react";

import RequestOverview from "./request-overview.component";
import Place from "./place.component";
import PatientInfo from "./patient-info.component";
import DriverInfo from "./driver-info.component";
import Feedback from "./feedback.component";

const RequestModal = ({ item }) => (
    <>
        <span className="content__title">Tổng quan</span>
        <RequestOverview
            status={item.status}
            requestType={item.patientName ? "Đặt cho người khác" : "Đặt cho bản thân"}
            transportType={item.emergency ? "Đi cấp cứu" : "Đi về nhà"}
        />
        <span className="content__title">Điểm đón, điểm nhận</span>
        <div className="position">
            <Place item={item.pickUp} title="Điểm đón" icon="fa-map-marker-alt" />
            <Place item={item.destination} title="Điểm đến" icon="fa-map-pin" />
        </div>
        <span className="content__title">Thông tin bệnh khách</span>
        <PatientInfo item={item} />
        <span className="content__title">Thông tin xe và tài xế</span>
        <DriverInfo item={item} />
        <span className="content__title">Góp ý và phản hồi</span>
        <Feedback item={item} />
    </>
);

export default RequestModal;
