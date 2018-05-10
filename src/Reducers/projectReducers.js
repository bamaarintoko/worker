import { initialAdd,initialGet } from "../Utils/initialState";
import { ADD_PROJECT, ADD_PROJCET_RESET, GET_PROJECT, GET_PROJECT_RESET } from "../Utils/Constant";

export function redAddProject(state = initialAdd, action) {
    switch (action.type) {
        case ADD_PROJECT:
            return {
                status: true,
                status_add: action.status_add,
                message: action.message,
                data: action.data
            }
        case ADD_PROJCET_RESET:
            return {
                status: false,
                status_add: false,
                message: "",
                data: []
            }
        default: return state
    }
}

export function redGetProject(state = initialGet, action) {
    // console.log(action)
    switch (action.type) {
        case GET_PROJECT:
            return {
                status: true,
                status_get: action.status_get,
                message: action.message,
                data: action.data
            }
        case GET_PROJECT_RESET:
            return {
                status : false,
                status_get : false,
                message : "",
                data : []
            }
        default: return state
    }
}