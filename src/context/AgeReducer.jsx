import { ACTIONS } from './actions'

export const AgeReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_FIELD:
      return {
        ...state,
        [action.payload.field]: action.payload.value
      }
    case ACTIONS.CALCULATE_AGE:
      return {
        ...state,
        resultYear: action.payload.years,
        resultMonth: action.payload.months,
        resultDay: action.payload.days
      }

    case ACTIONS.SET_ERROR:
      return {
        ...state,
        error: {
          isError: action.payload.isError,
          message: action.payload.message
        }
      }

    default:
      return state
  }
}
