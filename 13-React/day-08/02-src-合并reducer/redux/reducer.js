import {combineReducers} from 'redux'
import userReducer from './userreducer'
import  flagReducer from './flagreducer'

const rootReducer = combineReducers({
    userReducer,
    flagReducer
})
export default rootReducer