import Api from "../../Utils/Api";
import { GET_TASK, UPDATE_PROGRESS_TASK } from "../../Utils/Constant";

export function actGetTask(params) {
    return dispatch => {
        Api._POST('task/get', params)
            .then((response) => {
                dispatch({
                    type: GET_TASK,
                    status_get: response.data.status,
                    message: response.data.message,
                    data: response.data.result
                })
            }).catch((error) => {
                dispatch({
                    type: GET_TASK,
                    status_get: false,
                    message: error.message,
                    data: []
                })
            })
    }
}

export function actPickTask(params) {
    // console.log(params)
    return dispatch => {
        Api._POST('task/pick', params)
            .then((response) => {
                dispatch({
                    type:UPDATE_PROGRESS_TASK,
                    status_update : response.data.status,
                    message: response.data.message,
                    data : response.data.result
                })
                dispatch(actGetTask({project_id:params.project_id,data_id:params.data_id}))
                // console.log(response)
            }).catch((error) => {
                dispatch({
                    type: UPDATE_PROGRESS_TASK,
                    status_update : false,
                    message: error.message,
                    data :[]
                })
                // console.log(error.message)
            })
    }
}

export function actPickTest(params){
    console.log(params)
    return dispatch => {
        Api._POST('task/test',params)
            .then((response)=>{
                console.log(response)
                dispatch(actGetTask({project_id:params.project_id,data_id:params.data_id}))
            }).catch((error)=>{
                console.log(error.message)
            })
    }
}