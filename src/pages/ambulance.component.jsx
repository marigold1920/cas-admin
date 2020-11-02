import React from "react";

import DashboardHeader from "../components/dashboard-header.component";
import Filter from "../components/filter.component";
import Pagination from "../components/pagination.component";
import TableHeader from "../components/table-header.component";
import CustomTable from "../components/custom-table.component";
import AmbulanceRow from "../components/ambulance-row.component";

const requester = {
    licensePlate: "71 - B2 253.63",
    driverImage: "https://i.ibb.co/3YCfN9p/person-3.jpg",
    driverName: "Vũ Minh Khoa",
    registrationDate: "15/08/2020",
    expirationDate: "Không xác định",
    status: "Đang hoạt động"
};

const AmbulancePage = () => (
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
                sizes={["col__10", "col__20", "col__10", "col__15", "col__10"]}
            />
            <div className="table__content">
                <AmbulanceRow item={requester} />
            </div>
        </CustomTable>
        <Pagination totalPage={5} currentPage={1} />
    </section>
);

export default AmbulancePage;
