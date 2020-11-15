import React from "react";

import InfoItem from "./info-item.component";

const PatientInfo = ({
    item: {
        requesterName,
        requesterPhone,
        morbidityNote,
        patientName,
        patientPhone,
        morbidity,
        healthInformation
    }
}) => (
    <div className="section__info">
        <div className="section__info__item">
            <span className="title">Thông tin người gửi</span>
            <InfoItem customStyle="item" title="Tên" value={requesterName} />
            <InfoItem customStyle="item" title="Số điện thoại" value={requesterPhone} />
            <InfoItem customStyle="item" title="Ghi chú" value={morbidityNote} />
            {!patientName && (
                <>
                    {healthInformation && (
                        <InfoItem
                            customStyle="item"
                            title="Hồ sơ sức khỏe"
                            value={healthInformation}
                        />
                    )}
                    <InfoItem customStyle="item" title="Tình trạng cấp cứu" value={morbidity} />
                </>
            )}
        </div>
        {patientName && (
            <div className="section__info__item">
                <span className="title">Thông tin người bệnh</span>
                <InfoItem customStyle="item" title="Tên" value={patientName} />
                <InfoItem customStyle="item" title="Số điện thoại" value={patientPhone} />
                <InfoItem customStyle="item" title="Tình trạng cấp cứu" value={morbidity} />
            </div>
        )}
    </div>
);

export default PatientInfo;