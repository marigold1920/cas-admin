import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { fetchData } from "../redux/data/data.actions";
import { selectCurrentData } from "../redux/data/data.selectors";
import { selectToken } from "../redux/user/user.selectors";

import DashboardHeader from "../components/dashboard-header.component";
import Filter from "../components/filter.component";
import Pagination from "../components/pagination.component";
import RequesterRow from "../components/requester-row.component";
import TableHeader from "../components/table-header.component";
import CustomTable from "../components/custom-table.component";

const DriverPage = ({ drivers, token, fetchData }) => {
    useEffect(() => {
        fetchData("drivers", token);
    }, [fetchData, token]);

    return (
        <section className="dashboard">
            <DashboardHeader title="Tài xế" />
            <Filter items={["Tất cả", "Đang hoạt động", "Ngưng hoạt động"]} activeItem="Tất cả" />
            <CustomTable>
                <TableHeader
                    items={[
                        "Họ và tên",
                        "Số điện thoại",
                        "Ngày tạo",
                        "Trạng thái",
                        "Số yêu cầu",
                        "Tỉ lệ hoàn thành",
                        "Hành động"
                    ]}
                    sizes={["col__20", "col__10", "col__7", "col__10", "col__7", "col__10"]}
                />
                <div className="table__content">
                    {drivers.length > 0
                        ? drivers.map(({ userId, ...otherProps }) => (
                              <RequesterRow key={userId} {...otherProps} />
                          ))
                        : null}
                </div>
            </CustomTable>
            <Pagination totalPage={5} currentPage={1} />
        </section>
    );
};

const mapStateToProps = createStructuredSelector({
    drivers: selectCurrentData,
    token: selectToken
});

const mapDispatchToProps = dispatch => ({
    fetchData: (actor, token) => dispatch(fetchData(actor, token))
});

export default connect(mapStateToProps, mapDispatchToProps)(DriverPage);
