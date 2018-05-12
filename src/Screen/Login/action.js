import Api from "../../Utils/Api";
import Axios from "axios";
import { LOGIN } from "../../Utils/Constant";

export function actLogin(params){
    // console.log(params)
    return (dispatch, getState) => {
        // Api.POST('auth/login_developer',params)
        //     .then((response)=>{
        //         console.log(response)
        //     })
        // console.log(params)
        Api._POST('auth/login_developer',params)
        .then((response)=>{
            console.log(response)
            dispatch({
                type : LOGIN,
                status_get : response.data.status,
                message : response.data.message,
                data : response.data.result
            })
        }).catch((error)=>{
            dispatch({
                type : LOGIN,
                status_get : false,
                message : error.message,
                data : []
            })
        })
        // Axios.post(
        //     'http://service.mlskoding.com/api/auth/login_developer',params
        // ).then((response)=>{
        //     console.log(response)
        // }).catch((error)=>{
        //     console.log(error.message)
        // })
    }
}