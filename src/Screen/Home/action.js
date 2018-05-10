import Api from "../../Utils/Api";
import { ADD_PROJECT, GET_PROJECT } from "../../Utils/Constant";

export function actAddProject(params) {
    return dispath => {
        Api._POST('project/add', params)
            .then((response) => {
                dispath({
                    type : ADD_PROJECT,
                    status_add : response.data.status,
                    message : response.data.message,
                    data : response.data.result
                })
                console.log(response)
            }).catch((error) => {
                dispath({
                    type : ADD_PROJECT,
                    status_add :false,
                    message : error.message,
                    data : []
                })
            })
    }
}

export function actGetProject(params){
    return dispath =>{
        Api._POST('project/get',params)
            .then((response)=>{
                console.log(response)
                dispath({
                    type : GET_PROJECT,
                    status_get : response.data.status,
                    message: response.data.message,
                    data : response.data.result
                })
            }).catch((error)=>{
                dispath({
                    type : GET_PROJECT,
                    status_get : false,
                    message: error.message,
                    data : []
                })
            })
    }
}