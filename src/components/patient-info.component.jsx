import React from "react";

import InfoItem from "./info-item.component";

const PatientInfo = ({
    item: {
        requester,
        morbidityNote,
        patientName,
        patientPhone,
        morbidity,
        healthInformation,
        isOther
    }
}) => (
    <div className="section__info">
        <div className={`section__info__item ${!isOther ? "fill" : ""}`}>
            <span className="title">Thông tin người gửi</span>
            <InfoItem customStyle="item" title="Tên" value={requester.displayName} />
            <InfoItem customStyle="item" title="Số điện thoại" value={requester.phone} />
            {morbidityNote && <InfoItem customStyle="item" title="Ghi chú" value={morbidityNote} />}
            {isOther && (
                <>
                    {healthInformation && (
                        <InfoItem
                            customStyle="item"
                            title="Hồ sơ sức khỏe"
                            value={healthInformation}
                        />
                    )}
                    {morbidity && (
                        <InfoItem customStyle="item" title="Tình trạng" value={morbidity} />
                    )}
                </>
            )}
        </div>
        {isOther && (
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
