import { Action } from 'redux'

export interface WaterSlice {
    income: 0;
}

const initialState = {
    income: 0
}

export class AddIncomeAction implements Action {
    type: string = 'income/add';
    income: number = 0;
}

export default function incomeReducer(state = initialState, action: AddIncomeAction) {
    switch (action.type) {
      case 'income/add': {
          console.log('addIncome', action);
        return {
          // Again, one less level of nesting to copy
          ...state,
          income: state.income + action.income,
        }
      }
      default:
        return state
    }
}