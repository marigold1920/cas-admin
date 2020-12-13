export const grantPermission = (list, itemId) => {
    return list.map(item => (item.itemId === itemId ? { ...item, status: !item.status } : item));
};

export const handleRegisterAmbulance = (list, ambulanceId, status) => {
    return list.map(item => (item.itemId === ambulanceId ? { ...item, status } : item));
};
