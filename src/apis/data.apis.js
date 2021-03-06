import axios from "axios";

const api = axios.create({
    // baseURL: "http://localhost:3000/api/admin"
    baseURL: "http://casservernodejsversion01-env.eba-dmxzbmkd.ap-southeast-1.elasticbeanstalk.com/api/admin"
});

export const fetchData = (actor, token, pageIndex, status, keyword) => {
    return api.get(`/${actor}?pageIndex=${pageIndex}&keyword=${keyword}&status=${status}`, {
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

export const acceptRegisterAmbulance = (token, username, ambulanceId) => {
    return api.get(`/ambulances/accept/${ambulanceId}?username=${username}`, {
        headers: {
            Authorization: token
        }
    });
};

export const rejectRegisterAmbulance = (token, username, ambulanceId, note) => {
    return api.post(`/ambulances/reject/${ambulanceId}?username=${username}`, note, {
        headers: {
            Authorization: token
        }
    });
};
