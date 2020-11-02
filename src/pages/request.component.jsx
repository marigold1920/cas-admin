import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { fetchData } from "../redux/data/data.actions";
import { selectCurrentData } from "../redux/data/data.selectors";
import { selectToken } from "../redux/user/user.selectors";

import DashboardHeader from "../components/dashboard-header.component";
import Filter from "../components/filter.component";
import Pagination from "../components/pagination.component";
import RequestRow from "../components/request-row.component";
import TableHeader from "../components/table-header.component";
import CustomTable from "../components/custom-table.component";

const RequestPage = ({ requests, token, fetchData }) => {
    useEffect(() => {
        fetchData("requests", token);
    }, [fetchData, token]);

    return (
        <section className="dashboard">
            <DashboardHeader title="Yêu cầu" />
            <Filter
                items={["Tất cả", "Thành công", "Không hoàn thành", "Bị từ chối", "Đã hủy bỏ"]}
                activeItem="Tất cả"
            />
            <CustomTable>
                <TableHeader
                    items={[
                        "Người gửi",
                        "Tài xế",
                        "Biển số xe",
                        "Loại yêu cầu",
                        "Loại vận chuyển",
                        "Trạng thái",
                        "Hành động"
                    ]}
                    sizes={["col__20", "col__20", "col__7", "col__15", "col__10", "col__13"]}
                />
                <div className="table__content">
                    {requests.length > 0
                        ? requests.map(({ requestId, ...otherProps }) => (
                              <RequestRow key={requestId} {...otherProps} />
                          ))
                        : null}
                </div>
            </CustomTable>
            <Pagination totalPage={5} currentPage={1} />
        </section>
    );
};

const mapStateToProps = createStructuredSelector({
    requests: selectCurrentData,
    token: selectToken
});

const mapDispatchToProps = dispatch => ({
    fetchData: (actor, token) => dispatch(fetchData(actor, token))
});

export default connect(mapStateToProps, mapDispatchToProps)(RequestPage);
