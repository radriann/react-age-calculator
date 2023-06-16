import { createContext, useReducer } from 'react'
import { AgeReducer } from './AgeReducer'
import { ACTIONS } from './actions'

export const AgeContext = createContext(null)

export const AgeContextProvider = ({ children }) => {
  const initialState = {
    day: null,
    month: null,
    year: null,
    error: {
      isError: false,
      message: ''
    },
    resultDay: 0,
    resultMonth: 0,
    resultYear: 0
  }

  const [state, dispatch] = useReducer(AgeReducer, initialState)

  const handleInput = (e) => {
    const field = String(e.target.name)
    const value = String(e.target.value)

    dispatch({
      type: ACTIONS.SET_FIELD,
      payload: {
        field,
        value
      }
    })
  }

  const calculateAge = () => {
    const { day, month, year } = state

    if (!day && !month && !year) {
      dispatch({
        type: ACTIONS.SET_ERROR,
        payload: {
          isError: true,
          message: 'This field is required!'
        }
      })
      return
    }

    if (day > 31 || day < 1) {
      dispatch({
        type: ACTIONS.SET_ERROR,
        payload: {
          isError: true,
          message: 'Must be a valid day!'
        }
      })
      return
    }

    if (month > 12 || month < 1) {
      dispatch({
        type: ACTIONS.SET_ERROR,
        payload: {
          isError: true,
          message: 'Must be a valid month!'
        }
      })
      return
    }

    if (year > 2023) {
      dispatch({
        type: ACTIONS.SET_ERROR,
        payload: {
          isError: true,
          message: 'Must be in the past!'
        }
      })
      return
    }

    dispatch({ type: ACTIONS.SET_ERROR, payload: { isError: false, message: '' } })

    const currentDate = new Date()
    const birthDate = new Date(year, month - 1, day)
    const ageInMiliseconds = currentDate - birthDate

    const milisecondsInYear = 1000 * 60 * 60 * 24 * 365.25
    const milisecondsInMonth = milisecondsInYear / 12

    const ageInYears = Math.floor(ageInMiliseconds / milisecondsInYear)
    const ageInMonths = Math.floor((ageInMiliseconds % milisecondsInYear) / milisecondsInMonth)
    const ageInDays = Math.floor((ageInMiliseconds % milisecondsInMonth) / (1000 * 60 * 60 * 24))

    dispatch({
      type: ACTIONS.CALCULATE_AGE,
      payload: {
        years: ageInYears,
        months: ageInMonths,
        days: ageInDays
      }
    }
    )
  }

  return (
    <AgeContext.Provider
      value={{
        ...state,
        handleInput,
        calculateAge
      }}
    >
      {children}
    </AgeContext.Provider>
  )
}
