import React from "react";
import loading from "../assets/loading.gif";

const Spinner = () => (
    <div className="spinner">
        <img width={240} height={180} src={loading} alt="loading" />
    </div>
);

export default Spinner;
