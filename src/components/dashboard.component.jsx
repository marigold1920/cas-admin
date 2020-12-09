import React, { Suspense, useEffect, useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectActiveItem } from "../redux/table/table.selectors";
import { selectToken } from "../redux/user/user.selectors";
import {
    clearItem,
    fetchItemDetails,
    grantPermission,
    initItemId
} from "../redux/data/data.actions";
import {
    selectCurrentData,
    selectCurrentItem,
    selectCurrentItemId,
    selectIsPanel
} from "../redux/data/data.selectors";
import { modalMessages } from "../utils/modal-messages.data";

import DashboardHeader from "./dashboard-header.component";
import Filter from "./filter.component";
import Pagination from "./pagination.component";
import RequesterRow from "./requester-row.component";
import TableHeader from "./table-header.component";
import CustomTable from "./custom-table.component";
import AmbulanceRow from "./ambulance-row.component";
import RequestRow from "./request-row.component";
import Spinner from "./spinner.component";
import UserDetails from "./user-details.component";
import MessageModal from "./message-modal.component";

const titles = {
    requesters: "Người gửi yêu cầu",
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

const DashBoard = ({
    activeItem,
    currentItem,
    currentItemId,
    data,
    token,
    isPanel,
    fetchItemDetails,
    clearItem,
    initItemId,
    grantPermission
}) => {
    const [confirmation, setConfirmation] = useState(false);

    useEffect(() => {
        setConfirmation(false);
    }, [activeItem]);

    const handleSelectUser = itemId => {
        const state = true;
        fetchItemDetails(token, activeItem, itemId, state);
    };

    const handleGrantPermission = itemId => {
        initItemId(itemId);
        setConfirmation(true);
    };

    const handleConfirm = (token, activeItem, currentItemId) => {
        grantPermission(token, activeItem, currentItemId);
        setConfirmation(false);
    };

    const handleOnClose = () => {
        setConfirmation(false);
        clearItem();
    };

    const handleOnClosePanel = () => {
        clearItem();
    };

    return (
        <>
            <section className={`dashboard ${confirmation ? "blur" : ""}`}>
                <DashboardHeader title={titles[activeItem]} />
                <Filter
                    items={["Tất cả", "Đang hoạt động", "Ngưng hoạt động"]}
                    activeItem="Tất cả"
                />
                <CustomTable>
                    <TableHeader items={headerItems[activeItem]} sizes={sizes[activeItem]} />
                    <Suspense fallback={<Spinner />}>
                        <div className={`table__content ${isPanel ? "deactive" : ""}`}>
                            {data.length > 0
                                ? data.map(({ itemId, ...otherProps }) =>
                                      activeItem === "requesters" || activeItem === "drivers" ? (
                                          <RequesterRow
                                              viewDetails={() => handleSelectUser(itemId)}
                                              grantPermission={() => handleGrantPermission(itemId)}
                                              key={itemId}
                                              {...otherProps}
                                          />
                                      ) : activeItem === "ambulances" ? (
                                          <AmbulanceRow
                                              viewDetails={() =>
                                                  fetchItemDetails(token, activeItem, itemId)
                                              }
                                              grantPermission={() => handleGrantPermission(itemId)}
                                              key={itemId}
                                              {...otherProps}
                                          />
                                      ) : activeItem === "requests" ? (
                                          <RequestRow
                                              viewDetails={() =>
                                                  fetchItemDetails(token, activeItem, itemId)
                                              }
                                              key={itemId}
                                              {...otherProps}
                                          />
                                      ) : null
                                  )
                                : null}
                        </div>
                    </Suspense>
                </CustomTable>
                <UserDetails
                    item={currentItem}
                    current={activeItem}
                    onClose={handleOnClosePanel}
                    visible={isPanel}
                />
                <Pagination totalPage={1} currentPage={1} />
            </section>
            <MessageModal
                title="Chặn hoạt động"
                message={modalMessages["deactive"]}
                visible={confirmation}
                onConfirm={() => handleConfirm(token, activeItem, currentItemId)}
                onClose={handleOnClose}
            />
        </>
    );
};

const mapStateToProps = createStructuredSelector({
    activeItem: selectActiveItem,
    currentItem: selectCurrentItem,
    currentItemId: selectCurrentItemId,
    token: selectToken,
    data: selectCurrentData,
    isPanel: selectIsPanel
});

const mapDispatchToProps = dispatch => ({
    fetchItemDetails: (token, actor, itemId, isPanel) =>
        dispatch(fetchItemDetails(token, actor, itemId, isPanel)),
    clearItem: () => dispatch(clearItem()),
    initItemId: itemId => dispatch(initItemId(itemId)),
    grantPermission: (token, actor, itemId) => dispatch(grantPermission(token, actor, itemId))
});

export default connect(mapStateToProps, mapDispatchToProps)(DashBoard);
