import React from "react";

import DashboardHeader from "../components/dashboard-header.component";
import Filter from "../components/filter.component";
import Pagination from "../components/pagination.component";
import RequestRow from "../components/request-row.component";
import TableHeader from "../components/table-header.component";
import CustomTable from "../components/custom-table.component";

const request = {
    driverName: "Vương Mạnh An",
    driverImage: "https://i.ibb.co/3YCfN9p/person-3.jpg",
    requesterName: "Ngô Thiên Ý",
    requesterImage: "https://i.ibb.co/G5x3bRr/vo-ngoc-tran.png",
    status: "Không hoàn thành",
    licensePlate: "71 - B2 236.23",
    typeRequest: "Đặt cho người khác",
    typeTransport: "Đi cấp cứu"
};

const RequestPage = () => (
    <section class="dashboard">
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
                sizes={["col__13", "col__13", "col__10", "col__13", "col__10", "col__13"]}
            />
            <div class="table__content">
                <RequestRow item={request} />
            </div>
        </CustomTable>
        <Pagination totalPage={5} currentPage={1} />
    </section>
);

export default RequestPage;
