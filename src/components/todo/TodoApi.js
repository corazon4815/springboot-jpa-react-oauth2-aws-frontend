import axios from "axios";

export const todo = {

    reqGetEngineList: function (params) {
        return axios.get("/api/engine", {
            params: params
        })
            .then((res) => {
                return res.data.result;
            })
            .catch((err) => {
                return err.response.data.message;
            });
    }
}
