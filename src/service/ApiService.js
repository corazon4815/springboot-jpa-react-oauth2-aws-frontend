import axios from "axios";
import {todo} from "../components/todo/TodoApi";
import {user} from "../components/user/UserApi";

axios.defaults.withCredentials = true;
axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers['Access-Control-Allow-Origin'] = '*';
axios.defaults.timeout = 10000;

axios.interceptors.request.use(function (config) {
    console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")
    return config;
}, function (error) {
    return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
    console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@111")
    const {data, headers} = response;


    if (data.code === 401) {
    }
    /* switch (data.code) {
         case 400:
             break;
         case 401:
             sessionStorage.removeItem("session");
             sessionStorage.removeItem("token");
             break;
     }*/

    return response;
}, function (error) {

    setTimeout(() => {
        return Promise.reject(error);
    });

    // 응답 에러 시에도 로딩 끄기
    //return Promise.reject(error);
});

export default {
    todo,
    user,
};
