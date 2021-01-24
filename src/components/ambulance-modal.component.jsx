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
import { approveRegisterAmbulance, denyRegisterAmbulance } from "../firebase/firebase.utils";

const AmbulanceModal = ({
    item: {
        ambulanceId,
        status,
        identityCard,
        driverLicense,
        registerLicense,
        registryCertificate,
        username,
        note
    },
    token,
    acceptRegisterAmbulance,
    rejectRegisterAmbulance,
    clearItem
}) => {
    const [_note, setNote] = useState({
        identityCard: "",
        driverLicense: "",
        registerLicense: "",
        image: ""
    });
    const [warning, setWarning] = useState(false);

    const handleOnChange = event => {
        const { name, value } = event.target;
        setNote({ ..._note, [name]: value });
    };

    const handleAccept = () => {
        clearItem();
        acceptRegisterAmbulance(token, ambulanceId);
        approveRegisterAmbulance(username);
    };

    const handleDeny = () => {
        const isEmpty = !Object.values(_note).some(x => x !== "");
        if (!isEmpty) {
            clearItem();
            denyRegisterAmbulance(username);
            rejectRegisterAmbulance(token, ambulanceId, _note);
        } else {
            setWarning(true);
        }
    };

    return (
        <>
            <div className="registered__profile">
                <RegisteredImage
                    imageUrl={identityCard}
                    isActive={status === "CONFIRMING"}
                    title="Chứng minh nhân dân"
                    name="identityCard"
                    onChange={handleOnChange}
                    defaultValue={(note && note.identityCard) || ""}
                />
                <RegisteredImage
                    imageUrl={driverLicense}
                    isActive={status === "CONFIRMING"}
                    title="Giấy phép lái xe"
                    name="driverLicense"
                    onChange={handleOnChange}
                    defaultValue={(note && note.driverLicense) || ""}
                />
                <RegisteredImage
                    imageUrl={registerLicense}
                    isActive={status === "CONFIRMING"}
                    title="Giấy đăng kiểm"
                    name="registerLicense"
                    onChange={handleOnChange}
                    defaultValue={(note && note.registerLicense) || ""}
                />
                <RegisteredImage
                    imageUrl={registryCertificate}
                    isActive={status === "CONFIRMING"}
                    title="Cà vẹt xe"
                    name="image"
                    onChange={handleOnChange}
                    defaultValue={(note && note.registryCertificate) || ""}
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