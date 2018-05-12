import { initialAdd, initialGet, initialUpdate } from "../Utils/initialState";
import { ADD_TASK, ADD_TASK_RESET, GET_TASK, GET_TASK_RESET, UPDATE_PROGRESS_TASK, UPDATE_PROGRESS_TASK_RESET, GET_INVITE, GET_INVITE_RESET } from "../Utils/Constant";

export function redAddTaskReducer(state = initialAdd, action) {
    switch (action.type) {
        case ADD_TASK: return {
            status: true,
            status_add: action.status_add,
            message: action.message,
            data: action.data
        }
        case ADD_TASK_RESET: return {
            status: false,
            status_add: false,
            message: "",
            data: []
        }
        default: return state
    }
}

export function redGetTaskReducer(state = initialGet, action) {
    switch (action.type) {
        case GET_TASK: return {
            status: true,
            status_get: action.status_get,
            message: action.message,
            data: action.data
        }
        case GET_TASK_RESET: return {
            status: false,
            status_get: false,
            message: "",
            data: []
        }
        default: return state;
    }
}

export function redUpdateProgressTask(state = initialUpdate, action) {
    switch (action.type) {
        case UPDATE_PROGRESS_TASK:
            return {
                status: true,
                status_update: action.status_update,
                message: action.message,
                data: action.data
            }
        case UPDATE_PROGRESS_TASK_RESET:
            return {
                status: false,
                status_update: false,
                message: "",
                data: []
            }
        default: return state;
    }
}

export function redGetInvite(state = initialGet, action) {
    switch (action.type) {
        case GET_INVITE:
            return {
                status: true,
                status_get: true,
                message: "ada",
                result: action.data
            }
        case GET_INVITE_RESET:
            return {
                status: false
            }
        default: return state;
    }
}