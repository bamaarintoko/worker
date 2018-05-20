import { initialGet, initialAdd } from "../Utils/initialState";
import { LOGIN, LOGIN_RESET,REGISTER, REGISTER_RESET } from "../Utils/Constant";
// import { REGISTER } from "redux-persist";
export function redAuth(state = initialGet, action) {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                status: true,
                status_get: action.status_get,
                message: action.message,
                data: action.data
            }
        case LOGIN_RESET:
            return {
                status: false,
                status_get: false,
                message: [],
                data: []
            }
        default: return state
    }
}

export function redRegister(state = initialAdd, action) {
    // console.log(action.type)
    switch (action.type) {
        case REGISTER:
            return {
                status: true,
                status_add: action.status_add,
                message: action.message,
                data: action.data
            }
        case REGISTER_RESET:
            return {
                status : false,
                status_add : false,
                message : "",
                data : []
            }
        default: return state
    }
}