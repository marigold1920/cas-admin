import React from "react";
import InfoItem from "./info-item.component";

const RequesterModal = ({
  item: {
    dateCreated,
    displayName,
    imageUrl,
    numOfRequests,
    phone,
    healthInformation,
  },
}) => (
  <>
  <span className="content__title">Ảnh đại diện</span>
    <div className="ambulance__images">
      <img src={imageUrl} alt="ambulance" />
    </div>
    <div className="section_info">
      <div className="section__info__item">
        <span className="title">Thông tin cá nhân</span>
        <InfoItem customStyle="item" title="Ngày đăng ký" value={dateCreated} />
        <InfoItem customStyle="item" title="Số điện thoại" value={phone} />
        <InfoItem customStyle="item" title="Tên hiển thị" value={displayName} />
      </div>

      {healthInformation && (
        <div className="section__info__item">
          <span className="title">Hồ sơ sức khỏe</span>
          <InfoItem
            customStyle="item"
            title="Tuổi"
            value={healthInformation.age}
          />
          <InfoItem
            customStyle="item"
            title="Dị ứng"
            value={healthInformation.allergy}
          />
          <InfoItem
            customStyle="item"
            title="Huyet ap"
            value={healthInformation.bloodPressure}
          />
          <InfoItem
            customStyle="item"
            title="Gioi tinh"
            value={healthInformation.gender}
          />
          <InfoItem
            customStyle="item"
            title="medicalHistories"
            value={healthInformation.medicalHistories}
          />
          <InfoItem
            customStyle="item"
            title="morbidity"
            value={healthInformation.morbidity}
          />
        </div>
      )}
    </div>
  </>
);

export default RequesterModal;
