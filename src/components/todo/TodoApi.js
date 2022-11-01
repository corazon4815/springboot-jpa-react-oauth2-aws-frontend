import axios from "axios";
import {API_BASE_URL} from "../../api-config";

export const todo = {

    reqPostTodo: function (params) {
        return axios.post("/api/todo", params)
            .then((res) => {
                return res.data;
            })
            .catch((err) => {
                return err.response.data.message;
            });
    },

    reqPutTodo: function (params) {
        return axios.put("/api/todo", params)
            .then((res) => {
                return res.data;
            })
            .catch((err) => {
                return err.response.data.message;
            });
    },

    reqDeleteTodo: function (todo) {
        return axios.delete(`/api/todo/${todo.id}`)
            .then((res) => {
                return res.data;
            })
            .catch((err) => {
                return err.response.data.message;
            });
    },

    reqGetTodoList: function () {
        return axios.get( "/api/todo")
            .then((res) => {
                return res.data;
            })
            .catch((err) => {
                return err.response.data.message;
            });
    },

}
