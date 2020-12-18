import React from "react";
import { LineChart } from "react-chartkick";
import "chart.js";

const Chart = ({ data }) => (
    <div className="chart">
        <LineChart data={data} download={{ fontFamily: "Tex", backgroundColor: "#000" }} />
    </div>
);

export default Chart;
