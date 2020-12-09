export const grantPermission = (list, itemId) => {
    return list.map(item => (item.itemId === itemId ? { ...item, status: !item.status } : item));
};
