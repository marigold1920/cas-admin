import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000/api/admin"
    // baseURL: "http://caselastic-env-1.eba-rh86ed2y.ap-southeast-1.elasticbeanstalk.com/api/admin"
});

export const fetchData = (actor, token) => {
    return api.get(`/${actor}?pageIndex=1&keyword=&status=`, {
        headers: {
            Authorization: token
        }
    });
};

export const fetchItemDetails = (token, actor, itemId) => {
    return api.get(`${actor}/details/${itemId}`, {
        headers: {
            Authorization: token
        }
    });
};

export const grantPermission = (token, actor, itemId) => {
    return api.get(`/${actor}/${itemId}`, {
        headers: {
            Authorization: token
        }
    });
};

export const updateConfigurations = (token, configurations) => {
    return api.post("/system/configurations", configurations, {
        headers: {
            Authorization: token
        }
    });
};

export const acceptRegisterAmbulance = (token, ambulanceId) => {
    return api.get(`/ambulances/accept/${ambulanceId}`, {
        headers: {
            Authorization: token
        }
    });
};

export const rejectRegisterAmbulance = (token, ambulanceId, note) => {
    return api.post(`/ambulances/reject/${ambulanceId}`, note, {
        headers: {
            Authorization: token
        }
    });
};
