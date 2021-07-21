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
        "Số yêu cầu",
        "Tỉ lệ thành công",
        "Trạng thái",
        "Hành động"
    ],
    drivers: [
        "Họ và tên",
        "Số điện thoại",
        "Ngày tạo",
        "Số yêu cầu",
        "Tỉ lệ hoàn thành",
        "Trạng thái",
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
    requests: ["Người gửi", "Tài xế", "Biển số xe", "Loại yêu cầu", "Trạng thái", "Hành động"]
};

const sizes = {
    requesters: ["col__20", "col__10", "col__7", "col__7", "col__10", "col__10"],
    drivers: ["col__20", "col__10", "col__7", "col__7", "col__10", "col__10"],
    ambulances: ["col__10", "col__25", "col__10", "col__15", "col__10"],
    requests: ["col__20", "col__20", "col__7", "col__23", "col__13"]
};

const filterItems = {
    requesters: ["Tất cả", "Đang hoạt động", "Ngưng hoạt động"],
    drivers: ["Tất cả", "Đang hoạt động", "Ngưng hoạt động"],
    ambulances: ["Tất cả", "Đang hoạt động", "Đã hủy đăng ký", "Chờ xác nhận"],
    requests: ["Tất cả", "Đang xử lí", "Thành công", "Bị hủy bỏ", "Không hoàn thành"]
};

export { titles, headerItems, sizes, filterItems };
