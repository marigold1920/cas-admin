export const validate = (itemId, value, setValidation, configurations) => {
    const config = configurations.find(item => item.itemId === itemId);

    if (value.match(/^\d+$/) && value <= config.max && value >= config.min) {
        setConfigurations(
            configurations.map(item => (item.itemId === itemId ? { ...item, value } : item))
        );
    } else {
        setValidation({
            ...validation,
            [itemId]: `Giá trị phải là số nguyên nằm trong khoảng ${config.min} - ${config.max}`
        });
    }
};
