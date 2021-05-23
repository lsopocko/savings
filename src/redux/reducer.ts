import { combineReducers } from 'redux'
import expenditureReducer from '../features/expenditure/expenditureSlice'
import incomeReducer from '../features/income/incomeSlice'
import waterReducer from '../features/water/waterSlice'

const rootReducer = combineReducers({
    water: waterReducer,
    income: incomeReducer,
    expenditure: expenditureReducer
})

export default rootReducer