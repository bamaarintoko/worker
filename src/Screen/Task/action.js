import Api from "../../Utils/Api";
import { ADD_TASK, GET_TASK } from "../../Utils/Constant";
import { actGetTask } from "../DetailProject/actio";

export function actAddTask(params){
    return dispatch=>{
        Api._POST('task/add', params)
            .then((response)=>{
                dispatch({
                    type : ADD_TASK,
                    status_add : response.data.status,
                    message : response.data.message,
                    data :response.data.result
                })
                dispatch(actGetTask({project_id:params.project_id, data_id:params.data_id}))
                // console.log(response)
            }).catch((error)=>{
                dispatch({
                    type:ADD_TASK,
                    status_add:false,
                    message:"",
                    data:[]
                })
                // console.log(error.message)
            })
    }
}

