import axios from "axios";
import {todo} from "../components/todo/TodoApi";
import {user} from "../components/user/UserApi";

const _axios = axios.create({
    withCredentials : true,
    headers: {
        "Content-Type": "application/json;charset=utf-8",
        "Access-Control-Allow-Origin": "*",
    },
    timeout : 10000,
});

_axios.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

_axios.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default {
    todo,
    user,
};
