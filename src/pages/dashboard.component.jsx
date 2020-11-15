import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectActiveItem } from "../redux/table/table.selectors";
import { selectToken } from "../redux/user/user.selectors";
import { fetchData, fetchItemDetails } from "../redux/data/data.actions";
import { selectCurrentData } from "../redux/data/data.selectors";

import DashboardHeader from "../components/dashboard-header.component";
import Filter from "../components/filter.component";
import Pagination from "../components/pagination.component";
import RequesterRow from "../components/requester-row.component";
import TableHeader from "../components/table-header.component";
import CustomTable from "../components/custom-table.component";
import AmbulanceRow from "../components/ambulance-row.component";
import RequestRow from "../components/request-row.component";

const titles = {
    requesters: "Bệnh khách",
    drivers: "Tài xế",
    ambulances: "Xe cứu thương",
    requests: "Yêu cầu"
};

const headerItems = {
    requesters: [
        "Họ và tên",
        "Số điện thoại",
        "Ngày tạo",
        "Trạng thái",
        "Số yêu cầu",
        "Tỉ lệ thành công",
        "Hành động"
    ],
    drivers: [
        "Họ và tên",
        "Số điện thoại",
        "Ngày tạo",
        "Trạng thái",
        "Số yêu cầu",
        "Tỉ lệ hoàn thành",
        "Hành động"
    ],
    ambulances: [
        "Biển số xe",
        "Người đăng ký",
        "Ngày đăng ký",
        "Ngày hủy hợp đồng",
        "Trạng thái",
        "Hành động"
    ],
    requests: [
        "Người gửi",
        "Tài xế",
        "Biển số xe",
        "Loại yêu cầu",
        "Loại vận chuyển",
        "Trạng thái",
        "Hành động"
    ]
};
const sizes = {
    requesters: ["col__20", "col__10", "col__7", "col__10", "col__7", "col__10"],
    drivers: ["col__20", "col__10", "col__7", "col__10", "col__7", "col__10"],
    ambulances: ["col__10", "col__25", "col__10", "col__15", "col__10"],
    requests: ["col__20", "col__20", "col__7", "col__13", "col__10", "col__13"]
};

const DashBoardPage = ({ activeItem, data, fetchData, fetchItemDetails, token }) => {
    useEffect(() => {
        fetchData(activeItem, token);
    }, [fetchData, token, activeItem]);

    return (
        <section className="dashboard">
            <DashboardHeader title={titles[activeItem]} />
            <Filter items={["Tất cả", "Đang hoạt động", "Ngưng hoạt động"]} activeItem="Tất cả" />
            <CustomTable>
                <TableHeader items={headerItems[activeItem]} sizes={sizes[activeItem]} />
                <div className="table__content">
                    {data.length > 0
                        ? data.map(({ itemId, ...otherProps }) =>
                              activeItem === "requesters" || activeItem === "drivers" ? (
                                  <RequesterRow 
                                    action={() => fetchItemDetails(token, activeItem, itemId)}
                                    key={itemId} 
                                    {...otherProps} 
                                />
                              ) : activeItem === "ambulances" ? (
                                  <AmbulanceRow key={itemId} {...otherProps} />
                              ) : activeItem === "requests" ? (
                                  <RequestRow
                                      action={() => fetchItemDetails(token, activeItem, itemId)}
                                      key={itemId}
                                      {...otherProps}
                                  />
                              ) : null
                          )
                        : null}
                </div>
            </CustomTable>
            <Pagination totalPage={5} currentPage={1} />
        </section>
    );
};

const mapStateToProps = createStructuredSelector({
    activeItem: selectActiveItem,
    token: selectToken,
    data: selectCurrentData
});

const mapDispatchToProps = dispatch => ({
    fetchData: (actor, token) => dispatch(fetchData(actor, token)),
    fetchItemDetails: (token, actor, itemId) => dispatch(fetchItemDetails(token, actor, itemId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DashBoardPage);
