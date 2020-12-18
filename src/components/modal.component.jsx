import React from "react";
import { connect } from "react-redux";
import { clearItem } from "../redux/data/data.actions";

const Modal = ({ title, children, visible, clearItem }) => (
    <div className={`modal ${visible && "visible"}`}>
        <span onClick={clearItem} className="close">
            &times;
        </span>
        <div className="modal__mask">
            <div className="modal__body">
                <div className="modal__header">
                    <span className="title">{title}</span>
                </div>
                <div className="modal__content">{children}</div>
            </div>
        </div>
    </div>
);

const mapDispatchToProps = dispatch => ({
    clearItem: () => dispatch(clearItem())
});

export default connect(null, mapDispatchToProps)(Modal);
