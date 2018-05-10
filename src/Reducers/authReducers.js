import { initialGet } from "../Utils/initialState";
import { LOGIN, LOGIN_RESET } from "../Utils/Constant";
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
                status : false,
                status_get : false,
                message : [],
                data : []
            }
        default: return state
    }
}