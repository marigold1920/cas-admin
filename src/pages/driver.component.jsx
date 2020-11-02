import React from "react";

import DashboardHeader from "../components/dashboard-header.component";
import Filter from "../components/filter.component";
import Pagination from "../components/pagination.component";
import RequesterRow from "../components/requester-row.component";
import TableHeader from "../components/table-header.component";
import CustomTable from "../components/custom-table.component";

const requester = {
    displayName: "Vương Mạnh An",
    imageUrl: "https://i.ibb.co/3YCfN9p/person-3.jpg",
    phone: "0931738872",
    dateCreated: "15/08/2020",
    status: "Đang hoạt động",
    numOfRequest: 2,
    successRate: 100
};

const DriverPage = () => (
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
                sizes={["col__20", "col__10", "col__7", "col__10", "col__10", "col__10"]}
            />
            <div className="table__content">
                <RequesterRow item={requester} />
            </div>
        </CustomTable>
        <Pagination totalPage={5} currentPage={1} />
    </section>
);

export default DriverPage;
