import { Action } from 'redux'

export interface WaterSlice {
    level: 0;
}

const initialState = {
    level: 0
}

export class CalculateWaterLevelAction implements Action {
    type: string = 'water/recalculateLevel';
    income: any;
    expenditure: any;
}

export default function waterReducer(state = initialState, action: CalculateWaterLevelAction) {
    switch (action.type) {
      case 'water/recalculateLevel': {

        const expenditures = action?.expenditure?.expenditures?.reduce((prev: any, curr: any) => {
            console.log('prev: any, curr', prev, curr);
            if (prev.amount) {
                return prev.amount + curr.amount;
            }
            return prev + curr.amount;
        }, 0);

        console.log('expenditures', expenditures);

        return {
          // Again, one less level of nesting to copy
          ...state,
          level: action.income.income - expenditures
        }
      }
      default:
        return state
    }
}