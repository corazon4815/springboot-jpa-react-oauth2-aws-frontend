import axios from "axios";
import {API_BASE_URL} from "../../api-config";

export const user = {

    signIn: function (params) {
        return axios.post("/auth/login", params)
            .then((res) => {
                return res.data;
            })
            .catch((err) => {
                return err.response.data.message;
            });
    },

    signUp: function (params) {
        return axios.post("/auth/signup", params)
            .then((res) => {
                return res.data;
            })
            .catch((err) => {
                return err.response.data.message;
            });
    },

    recreateToken: function () {
        return axios.post("/auth/recreate")
            .then((res) => {
                return res.data;
            })
            .catch((err) => {
                return err.response.data.message;
            });
    },

    signOut: function () {
        return axios.post("/auth/logout")
            .then((res) => {
                return res.data;
            })
            .catch((err) => {
                return err.response.data.message;
            });
    },
}
