import React from "react";

const MessageModal = ({ title, message, visible, isWarning, onConfirm, onClose }) => (
    <div className={`message__modal ${visible ? "visible" : ""}`}>
        <span className="confirm__title">{title}</span>
        <p>{message}</p>
        {!isWarning && <p className="confirm">Bạn chắc chắn muốn tiếp tục?</p>}
        <div className="group__action">
            {!isWarning && <span onClick={onClose}>Đóng</span>}
            <span onClick={onConfirm} className="confirm__action">
                Xác nhận
            </span>
        </div>
    </div>
);

export default MessageModal;
