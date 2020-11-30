import React from "react";

const Spinner = () => (
    <div className="spinner">
        <img className="outer" src="./icons/loading.gif" alt="spinner" />
        <img className="inner" src="./icons/loading-inner.gif" alt="inner spinner" />
    </div>
);

export default Spinner;
