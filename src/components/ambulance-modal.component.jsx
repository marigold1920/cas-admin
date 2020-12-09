import React, { useState } from "react";
import RegisteredImage from "./registered-image.component";

const AmbulanceModal = ({
    item: { ambulanceId, status, identityCard, driverLicense, registerLicense, image }
}) => {
    const [note, setNote] = useState({
        identityCard: "",
        driverLicense: "",
        registerLicense: "",
        image: ""
    });

    const handleDeny = () => {
        console.log(note);
    };

    const handleOnChange = event => {
        const { name, value } = event.target;
        setNote({ ...note, [name]: value });
    };

    const hanleAcceptRegisterAmbulanceRequest = () => {};

    return (
        <div className="registered__profile">
            <RegisteredImage
                imageUrl={identityCard}
                isActive={status !== "DEACTIVE"}
                title="Chứng minh nhân dân"
                name="identityCard"
                onChange={handleOnChange}
            />
            <RegisteredImage
                imageUrl={driverLicense}
                isActive={status !== "DEACTIVE"}
                title="Giấy phép lái xe"
                name="driverLicense"
                onChange={handleOnChange}
            />
            <RegisteredImage
                imageUrl={registerLicense}
                isActive={status !== "DEACTIVE"}
                title="Giấy đăng kiểm"
                name="registerLicense"
                onChange={handleOnChange}
            />
            <RegisteredImage
                imageUrl={image}
                isActive={status !== "DEACTIVE"}
                title="Hình ảnh xe"
                name="image"
                onChange={handleOnChange}
            />
            <div className="group__action">
                {status === "CONFIRMING" ? (
                    <>
                        <span onClick={handleDeny} className="deny">
                            Không hợp lệ
                        </span>
                        <span className="accept">Duyệt</span>
                    </>
                ) : status === "ACTIVE" ? (
                    <span className="grant">Chặn hoạt động</span>
                ) : (
                    <span className="grant">Mở hoạt động</span>
                )}
            </div>
        </div>
    );
};

export default AmbulanceModal;
