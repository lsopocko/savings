import { combineReducers } from 'redux'
import waterReducer from '../features/water/waterSlice'

const rootReducer = combineReducers({
    water: waterReducer
})

export default rootReducer