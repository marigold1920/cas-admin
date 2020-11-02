import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectRequesters } from "../redux/data/data.selectors";
import { selectToken } from "../redux/user/user.selectors";
import { fetchRequesters } from "../redux/data/data.actions";

import DashboardHeader from "../components/dashboard-header.component";
import Filter from "../components/filter.component";
import Pagination from "../components/pagination.component";
import RequesterRow from "../components/requester-row.component";
import TableHeader from "../components/table-header.component";
import CustomTable from "../components/custom-table.component";

const RequesterPage = ({ requesters, token, fetchRequesters }) => {
    useEffect(() => {
        fetchRequesters("requesters", token);
    }, [fetchRequesters, token]);

    return (
        <section className="dashboard">
            <DashboardHeader title="Bệnh khách" />
            <Filter items={["Tất cả", "Đang hoạt động", "Ngưng hoạt động"]} activeItem="Tất cả" />
            <CustomTable>
                <TableHeader
                    items={[
                        "Họ và tên",
                        "Số điện thoại",
                        "Ngày tạo",
                        "Trạng thái",
                        "Số yêu cầu",
                        "Tỉ lệ thành công",
                        "Hành động"
                    ]}
                    sizes={["col__20", "col__10", "col__7", "col__10", "col__7", "col__10"]}
                />
                <div className="table__content">
                    {requesters.length > 0
                        ? requesters.map(({ requesterId, ...otherProps }) => (
                              <RequesterRow key={requesterId} {...otherProps} />
                          ))
                        : null}
                </div>
            </CustomTable>
            <Pagination totalPage={5} currentPage={1} />
        </section>
    );
};

const mapStateToProps = createStructuredSelector({
    requesters: selectRequesters,
    token: selectToken
});

const mapDispatchToProps = dispatch => ({
    fetchRequesters: (actor, token) => dispatch(fetchRequesters(actor, token))
});

export default connect(mapStateToProps, mapDispatchToProps)(RequesterPage);
