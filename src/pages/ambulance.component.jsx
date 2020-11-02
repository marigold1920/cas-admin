import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { fetchData } from "../redux/data/data.actions";
import { selectCurrentData } from "../redux/data/data.selectors";
import { selectToken } from "../redux/user/user.selectors";

import DashboardHeader from "../components/dashboard-header.component";
import Filter from "../components/filter.component";
import Pagination from "../components/pagination.component";
import TableHeader from "../components/table-header.component";
import CustomTable from "../components/custom-table.component";
import AmbulanceRow from "../components/ambulance-row.component";

const AmbulancePage = ({ ambulances, token, fetchData }) => {
    useEffect(() => {
        fetchData("ambulances", token);
    }, [fetchData, token]);

    return (
        <section className="dashboard">
            <DashboardHeader title="Xe cứu thương" />
            <Filter
                items={["Tất cả", "Đang hoạt động", "Đã hủy đăng ký", "Chờ xác nhận"]}
                activeItem="Tất cả"
            />
            <CustomTable>
                <TableHeader
                    items={[
                        "Biển số xe",
                        "Người đăng ký",
                        "Ngày đăng ký",
                        "Ngày hủy hợp đồng",
                        "Trạng thái",
                        "Hành động"
                    ]}
                    sizes={["col__10", "col__25", "col__10", "col__15", "col__10"]}
                />
                <div className="table__content">
                    {ambulances.length > 0
                        ? ambulances.map(({ ambulanceId, ...otherProps }) => (
                              <AmbulanceRow key={ambulanceId} {...otherProps} />
                          ))
                        : null}
                </div>
            </CustomTable>
            <Pagination totalPage={5} currentPage={1} />
        </section>
    );
};

const mapStateToProps = createStructuredSelector({
    ambulances: selectCurrentData,
    token: selectToken
});

const mapDispatchToProps = dispatch => ({
    fetchData: (actor, token) => dispatch(fetchData(actor, token))
});

export default connect(mapStateToProps, mapDispatchToProps)(AmbulancePage);
