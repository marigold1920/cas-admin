import axios from "axios";

const api = axios.create({
    // baseURL: "http://localhost:5000/api/users"
    // baseURL: "https://cas-capstone.herokuapp.com/api"
    // baseURL: "http://caselastic-env.eba-iukmv232.ap-southeast-1.elasticbeanstalk.com/api"
    baseURL: "http://caselastic-env-1.eba-rh86ed2y.ap-southeast-1.elasticbeanstalk.com/api/users"
});

export const login = (username, password) => {
    return api.post("/login", {
        username,
        password
    });
};
