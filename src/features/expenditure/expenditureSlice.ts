import { Action } from 'redux';

const initialState = {
    expenditures: []
}

export class AddExpenditureAction implements Action {
    type: string = 'expenditure/add';
    amount: number = 0;
    title: string = '';
}

export default function expenditureReducer(state = initialState, action: AddExpenditureAction) {
    switch (action.type) {
      case 'expenditure/add': {
          console.log('addExpenditure', action);
        return {
          // Again, one less level of nesting to copy
          ...state,
          expenditures: [...state.expenditures, { title: action.title, amount: action.amount }],
        }
      }
      default:
        return state
    }
}