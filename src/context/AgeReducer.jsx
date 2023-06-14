import { ACTIONS } from './actions'

export const AgeReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_DAY:
      return {
        ...state,
        day: action.payload
      }

    case ACTIONS.SET_MONTH:
      return {
        ...state,
        month: action.payload
      }

    case ACTIONS.SET_YEAR:
      return {
        ...state,
        year: action.payload
      }

    case ACTIONS.CALCULATE_AGE:
      return {
        ...state,
        year: action.payload.years,
        month: action.payload.months,
        day: action.payload.days
      }

    default:
      return state
  }
}
