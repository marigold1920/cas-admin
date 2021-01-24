import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000/api/users"
    // baseURL: "http://caselastic-env-1.eba-rh86ed2y.ap-southeast-1.elasticbeanstalk.com/api/users"
});

export const login = (username, password) => {
    return api.post("/login_admin", {
        username,
        password
    });
};
