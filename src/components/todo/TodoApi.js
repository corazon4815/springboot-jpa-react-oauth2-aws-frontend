import axios from "axios";
import {API_BASE_URL} from "../../api-config";

export const todo = {

    reqPostTodo: function (params) {
        return axios.post("/todo", params)
            .then((res) => {
                return res.data;
            })
            .catch((err) => {
                return err.response.data.message;
            });
    },

    reqPutTodo: function (params) {
        return axios.put("/todo", params)
            .then((res) => {
                return res.data;
            })
            .catch((err) => {
                return err.response.data.message;
            });
    },

    reqDeleteTodo: function (todo) {
        return axios.delete(`/todo/${todo.id}`)
            .then((res) => {
                return res.data;
            })
            .catch((err) => {
                return err.response.data.message;
            });
    },

    reqGetTodoList: function () {
        return axios.get( "/todo")
            .then((res) => {
                return res.data;
            })
            .catch((err) => {
                return err.response.data.message;
            });
    },

}
