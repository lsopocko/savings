import { Action } from 'redux'

  const initialState = {
    level: 0
  }

  export default function waterReducer(state = initialState, action: Action<any>) {
    switch (action.type) {
      case 'water/riseLevel': {
        return {
          // Again, one less level of nesting to copy
          ...state,
          level: state.level++,
        }
      }
      default:
        return state
    }
  }