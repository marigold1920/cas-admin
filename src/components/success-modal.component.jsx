import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectStatusCode } from "../redux/message/message.selectors";
import { clearStatusCode } from "../redux/message/message.action";
import { statusMessage } from "../utils/status-message.data";

const SuccessModal = ({ statusCode, clearStatusCode }) => (
    <div className={`success__modal ${statusCode ? "visible" : ""}`}>
        <img src="https://i.ibb.co/cLw8tgq/success-icon-10.png" alt="success" />
        <p>{statusMessage[statusCode]}</p>
        <span onClick={() => clearStatusCode()} className="confirm__action">
            Xác nhận
        </span>
    </div>
);

const mapStateToProps = createStructuredSelector({
    statusCode: selectStatusCode
});

const mapDispatchToProps = dispatch => ({
    clearStatusCode: () => dispatch(clearStatusCode())
});

export default connect(mapStateToProps, mapDispatchToProps)(SuccessModal);
