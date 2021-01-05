export const grantPermission = (list, itemId) => {
    return list.map(item =>
        item.itemId === itemId
            ? {
                  ...item,
                  status:
                      item.status === "Đang hoạt động"
                          ? "Ngưng hoạt động"
                          : item.status === "Ngưng hoạt động"
                          ? "Đang hoạt động"
                          : !item.status
              }
            : item
    );
};

export const handleRegisterAmbulance = (list, ambulanceId, status) => {
    return list.map(item => (item.itemId === ambulanceId ? { ...item, status } : item));
};
