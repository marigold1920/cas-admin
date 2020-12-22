import React, { useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectToken } from "../redux/user/user.selectors";
import {
    acceptRegisterAmbulance,
    rejectRegisterAmbulance,
    clearItem
} from "../redux/data/data.actions";
import { modalMessages } from "../utils/modal-messages.data";

import RegisteredImage from "./registered-image.component";
import MessageModal from "./message-modal.component";
import { approveRegisterAmbulance } from "../firebase/firebase.utils";

const AmbulanceModal = ({
    item: {
        ambulanceId,
        status,
        identityCard,
        driverLicense,
        registerLicense,
        registryCertificate,
        username
    },
    token,
    acceptRegisterAmbulance,
    rejectRegisterAmbulance,
    clearItem
}) => {
    const [note, setNote] = useState({
        identityCard: "",
        driverLicense: "",
        registerLicense: "",
        image: ""
    });
    const [warning, setWarning] = useState(false);

    const handleOnChange = event => {
        const { name, value } = event.target;
        setNote({ ...note, [name]: value });
    };

    const handleAccept = () => {
        clearItem();
        acceptRegisterAmbulance(token, ambulanceId);
        console.log(username);
        approveRegisterAmbulance(username);
    };

    const handleDeny = () => {
        const isEmpty = !Object.values(note).some(x => x !== "");
        if (!isEmpty) {
            clearItem();
            rejectRegisterAmbulance(token, ambulanceId, note);
        } else {
            setWarning(true);
        }
    };

    return (
        <>
            <div className="registered__profile">
                <RegisteredImage
                    imageUrl={identityCard}
                    isActive={status !== "DEACTIVE" && status !== "CANCELED"}
                    title="Chứng minh nhân dân"
                    name="identityCard"
                    onChange={handleOnChange}
                />
                <RegisteredImage
                    imageUrl={driverLicense}
                    isActive={status !== "DEACTIVE" && status !== "CANCELED"}
                    title="Giấy phép lái xe"
                    name="driverLicense"
                    onChange={handleOnChange}
                />
                <RegisteredImage
                    imageUrl={registerLicense}
                    isActive={status !== "DEACTIVE" && status !== "CANCELED"}
                    title="Giấy đăng kiểm"
                    name="registerLicense"
                    onChange={handleOnChange}
                />
                <RegisteredImage
                    imageUrl={registryCertificate}
                    isActive={status !== "DEACTIVE" && status !== "CANCELED"}
                    title="Cà vẹt xe"
                    name="image"
                    onChange={handleOnChange}
                />
                <div className="group__action">
                    {status === "CONFIRMING" ? (
                        <>
                            <span onClick={handleDeny} className="deny">
                                Không hợp lệ
                            </span>
                            <span onClick={handleAccept} className="accept">
                                Duyệt
                            </span>
                        </>
                    ) : status === "ACTIVE" ? (
                        <span className="grant">Chặn hoạt động</span>
                    ) : status === "REJECTED" ? (
                        <span onClick={handleAccept} className="accept">
                            Duyệt
                        </span>
                    ) : status === "DEACTIVE" ? (
                        <span className="grant">Mở hoạt động</span>
                    ) : null}
                </div>
            </div>
            <MessageModal
                title="DUYỆT KHÔNG THÀNH CÔNG"
                message={modalMessages["warningConfirm"]}
                visible={warning}
                isWarning
                onConfirm={() => setWarning(false)}
            />
        </>
    );
};

const mapStateToProps = createStructuredSelector({
    token: selectToken
});

const mapDispatchToProps = dispatch => ({
    acceptRegisterAmbulance: (token, ambulanceId) =>
        dispatch(acceptRegisterAmbulance(token, ambulanceId)),
    rejectRegisterAmbulance: (token, ambulanceId, note) =>
        dispatch(rejectRegisterAmbulance(token, ambulanceId, note)),
    clearItem: () => dispatch(clearItem())
});

export default connect(mapStateToProps, mapDispatchToProps)(AmbulanceModal);
