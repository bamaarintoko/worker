import Api from "../../Utils/Api";
import { GET_INVITE } from "../../Utils/Constant";

export function actInvite(params){
    return dispatch=>{
        Api._POST('contributor/find',params)
            .then((response)=>{
                dispatch({
                    type:GET_INVITE,
                    status_get : response.data.status,
                    data : response.data.result
                })
                console.log(response)
            })
    }
}