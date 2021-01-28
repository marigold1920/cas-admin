import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCurrentData } from "../redux/data/data.selectors";
import { updateConfigurations } from "../redux/data/data.actions";
import { selectToken } from "../redux/user/user.selectors";

import Chart from "./chart.component";
import ConfigItem from "./config-item.component";
import StatusReport from "./status-report.component";
import AmbulanceRowReport from "./ambulance-row-report.component";

const Report = ({ data, token, updateConfigurations }) => {
    const [configurations, setConfigurations] = useState([]);
    const [config, setConfig] = useState(null);
    const [validation, setValidation] = useState({});
    const mapKey = {
        1: "requestTimeout",
        2: "termTimeout",
        3: "radius",
        4: "extraRadius",
        5: "maxRadius"
    };

    useEffect(() => {
        if (data.configurations) {
            const config = data.configurations.reduce((acc, cur) => {
                return {
                    ...acc,
                    [mapKey[cur.itemId]]: Number.parseInt(cur.value)
                };
            }, {});

            setConfig(config);
            setConfigurations(data.configurations);
        }
    }, [data]);

    const handleOnChange = (itemId, value) => {
        setConfigurations(
            configurations.map(item => (item.itemId === itemId ? { ...item, value } : item))
        );
    };

    const handleUpdateConfigurations = event => {
        event.preventDefault();
        updateConfigurations(token, configurations);
    };

    return (
        <div className="report">
            <div className="report__data">
                <span className="title">Thống kê yêu cầu</span>
                <div className="data">
                    <Chart data={data.recentlyRequests} />
                    <div className="details">
                        <StatusReport
                            icon="https://i.ibb.co/7QKnkq9/success.png"
                            value={
                                `${data.successRate && data.successRate.toFixed(2)}%` ||
                                "Đang cập nhật"
                            }
                            description="Yêu cầu được thực hiện"
                            name="Thành công"
                        />
                        <StatusReport
                            icon="https://i.ibb.co/pwmZ9tz/popular.png"
                            value={data.popularRegion || "Đang cập nhật"}
                            description="Khu vực gửi yêu cầu"
                            name="Nhiều nhất"
                        />
                    </div>
                </div>
                <div className="ambulance__requests">
                    <span className="title">Yêu cầu đăng ký xe gần đây</span>
                    <div className="ambulance">
                        {data.ambulances &&
                            data.ambulances.length > 0 &&
                            data.ambulances.map(({ id, ...otherProps }) => (
                                <AmbulanceRowReport key={id} {...otherProps} />
                            ))}
                    </div>
                </div>
            </div>
            <div className="system">
                <form className="config">
                    <span className="title">Thiết lập hệ thống</span>
                    {configurations.length > 0 &&
                        configurations.map(({ itemId, description, value, min, max }) => (
                            <ConfigItem
                                key={itemId}
                                description={description}
                                placeholder="5"
                                type="number"
                                defaultValue={value}
                                onChange={e => handleOnChange(itemId, e.target.value)}
                                min={min}
                                max={max}
                            />
                        ))}
                    <button type="submit" onClick={handleUpdateConfigurations} className="save">
                        Lưu thay đổi
                    </button>
                </form>
            </div>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    data: selectCurrentData,
    token: selectToken
});

const mapDispatchToProps = dispatch => ({
    updateConfigurations: (token, configurations) =>
        dispatch(updateConfigurations(token, configurations))
});

export default connect(mapStateToProps, mapDispatchToProps)(Report);
