import { combineReducers } from 'redux'
import { nav } from './dataReducers'
import { redAuth } from './authReducers'
import {redAddProject,redGetProject} from './projectReducers'
const rootReducer = combineReducers({
    redAuth: redAuth,
    redAddProject: redAddProject,
    redGetProject: redGetProject,
    nav: nav
})

export default rootReducer