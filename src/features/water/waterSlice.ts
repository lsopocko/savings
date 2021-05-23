import { Action } from 'redux'

export interface WaterSlice {
    level: 0;
}

const initialState = {
    level: 0
}

export class CalculateWaterLevelAction implements Action {
    type: string = 'water/recalculateLevel';
}

export default function waterReducer(state = initialState, action: CalculateWaterLevelAction) {
    switch (action.type) {
      case 'water/recalculateLevel': {
        //   console.log('water reducer', state);
        return {
          // Again, one less level of nesting to copy
          ...state
        }
      }
      default:
        return state
    }
}