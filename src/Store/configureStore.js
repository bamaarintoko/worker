import { createStore, applyMiddleware,compose } from 'redux'
import app from '../Reducers'
import thunk from 'redux-thunk'
// import {initialFilter} from '../reducers/authReducers'
// import Preference from "../utils/Preference";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
import { middleware } from '../Utils/Redux'
import { AsyncStorage} from 'react-native'
import {persistReducer, persistStore} from "redux-persist";
const persistConfig = {
    key: 'root',
    storage:AsyncStorage,
    whitelist: ['redGetUserId','redAuthCredential']
}

const persistedReducer = persistReducer(persistConfig, app)
    export const store = createStore(persistedReducer, applyMiddleware(thunk, middleware))
    export const persistor = persistStore(store)

// export default () => {
//     return { store, persistor }
// }