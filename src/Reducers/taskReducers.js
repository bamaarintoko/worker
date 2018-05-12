import { initialAdd } from "../Utils/initialState";
import { ADD_TASK, ADD_TASK_RESET } from "../Utils/Constant";

export function redAddTaskReducer(state = initialAdd, action) {
    switch (action.type) {
        case ADD_TASK: return {
            
        }
        case ADD_TASK_RESET: return {

        }
        default: return state
    }
}