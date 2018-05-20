import { combineReducers } from 'redux'
import { nav } from './dataReducers'
import { redAuth, redRegister } from './authReducers'
import { redAddProject, redGetProject } from './projectReducers'
import { redAddTaskReducer, redGetTaskReducer, redUpdateProgressTask, redGetInvite } from './taskReducers'
const rootReducer = combineReducers({
    redAuth: redAuth,
    redAddProject: redAddProject,
    redGetProject: redGetProject,
    redAddTaskReducer: redAddTaskReducer,
    redGetTaskReducer: redGetTaskReducer,
    redUpdateProgressTask: redUpdateProgressTask,
    redGetInvite: redGetInvite,
    redRegister: redRegister,
    nav: nav
})

export default rootReducer