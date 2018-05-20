import Api from "../../Utils/Api";
import { REGISTER } from "../../Utils/Constant";

export function actRegister(params) {
    return dispatch => {

        Api._POST('auth/register_developer', params)
            .then((response) => {
                // console.log(response)
                dispatch({
                    type: REGISTER,
                    status_add: response.data.status,
                    message: response.data.message,
                    data: response.data.result
                })
            }).then((error) => {
                dispatch({
                    type: REGISTER,
                    status_add: false,
                    message: error.message,
                    data: []
                })
            })
    }
}