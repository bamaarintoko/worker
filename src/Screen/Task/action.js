import Api from "../../Utils/Api";

export function actAddTask(params){
    return dispatch=>{
        Api._POST('task/add', params)
            .then((response)=>{
                console.log(response)
            }).catch((error)=>{
                console.log(error.message)
            })
    }
}