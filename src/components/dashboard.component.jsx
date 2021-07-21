import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectActiveItem } from "../redux/table/table.selectors";
import { selectToken } from "../redux/user/user.selectors";
import {
    clearItem,
    fetchItemDetails,
    grantPermission,
    initItemId,
    toggleLoading
} from "../redux/data/data.actions";
import {
    selectCurrentData,
    selectCurrentItem,
    selectCurrentItemId,
    selectIsPanel,
    selectTotalPage,
    selectCurrentPage,
    selectLoading
} from "../redux/data/data.selectors";
import { modalMessages } from "../utils/modal-messages.data";
import { titles, headerItems, sizes } from "../utils/title.data";

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
    grantPermission,
    totalPage,
    currentPage,
    loading,
    toggleLoading
}) => {
    const [confirmation, setConfirmation] = useState(false);

    useEffect(() => {
        setConfirmation(false);
        loading &&
            setTimeout(() => {
                toggleLoading();
            }, 750);
    }, [activeItem, loading, toggleLoading]);

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
                <Filter />
                <CustomTable>
                    <TableHeader items={headerItems[activeItem]} sizes={sizes[activeItem]} />
                    {loading && <Spinner />}
                    <div className={`table__content ${isPanel ? "deactive" : ""}`}>
                        {data.length > 0
                            ? data.map(({ id, ...otherProps }) =>
                                  activeItem === "requesters" || activeItem === "drivers" ? (
                                      <RequesterRow
                                          viewDetails={() => handleSelectUser(id)}
                                          grantPermission={() => handleGrantPermission(id)}
                                          key={id}
                                          {...otherProps}
                                      />
                                  ) : activeItem === "ambulances" ? (
                                      <AmbulanceRow
                                          viewDetails={() =>
                                              fetchItemDetails(token, activeItem, id)
                                          }
                                          grantPermission={() => handleGrantPermission(id)}
                                          key={id}
                                          {...otherProps}
                                      />
                                  ) : activeItem === "requests" ? (
                                      <RequestRow
                                          viewDetails={() =>
                                              fetchItemDetails(token, activeItem, id)
                                          }
                                          key={id}
                                          {...otherProps}
                                      />
                                  ) : null
                              )
                            : null}
                    </div>
                </CustomTable>
                <UserDetails
                    item={currentItem}
                    current={activeItem}
                    onClose={handleOnClosePanel}
                    visible={isPanel}
                />
                <Pagination totalPage={totalPage} currentPage={currentPage} />
            </section>
            <MessageModal
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
    isPanel: selectIsPanel,
    totalPage: selectTotalPage,
    currentPage: selectCurrentPage,
    loading: selectLoading
});

const mapDispatchToProps = dispatch => ({
    fetchItemDetails: (token, actor, itemId, isPanel) =>
        dispatch(fetchItemDetails(token, actor, itemId, isPanel)),
    clearItem: () => dispatch(clearItem()),
    initItemId: itemId => dispatch(initItemId(itemId)),
    grantPermission: (token, actor, itemId) => dispatch(grantPermission(token, actor, itemId)),
    toggleLoading: () => dispatch(toggleLoading())
});

export default connect(mapStateToProps, mapDispatchToProps)(DashBoard);
