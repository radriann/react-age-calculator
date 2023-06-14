import { createContext, useReducer } from 'react'
import { AgeReducer } from './AgeReducer'
import { ACTIONS } from './actions'

export const AgeContext = createContext(null)

export const AgeContextProvider = ({ children }) => {
  const initialState = {
    day: 0,
    month: 0,
    year: 0,
    error: false,
    result: 0
  }

  const [state, dispatch] = useReducer(AgeReducer, initialState)

  const setDay = (day) => {
    dispatch({ type: ACTIONS.SET_DAY, payload: day })
  }

  const setMonth = (month) => {
    dispatch({ type: ACTIONS.SET_MONTH, payload: month })
  }

  const setYear = (year) => {
    dispatch({ type: ACTIONS.SET_YEAR, payload: year })
  }

  const calculateAge = () => {
    const { day, month, year } = state

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
    console.log(ageInDays, ageInMonths, ageInYears)
  }

  return (
    <AgeContext.Provider
      value={{
        day: state.day,
        month: state.month,
        year: state.year,
        error: state.error,
        result: state.result,
        setDay,
        setMonth,
        setYear,
        calculateAge
      }}
    >
      {children}
    </AgeContext.Provider>
  )
}
