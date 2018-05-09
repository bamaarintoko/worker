import { combineReducers } from 'redux'
import {nav} from './dataReducers'

const rootReducer = combineReducers({
    nav                 :nav
})

export default rootReducer