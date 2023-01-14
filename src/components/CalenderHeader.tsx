import React, { FC, ReactElement } from 'react'
import { ICalenderHeader } from './interfaces/ICalenderHeader'
import Cell from './Cell'
import { add, format, sub } from 'date-fns'

const CalenderHeader: FC<ICalenderHeader> = (props): ReactElement => {
  const { date, setDate } = props
  const title = format(date, "LLLL yyyy")

  const jumpToPrevMonth = () => {
    const newDate = sub(date, { months: 1 })
    setDate(newDate)
  }

  const jumpToNextMonth = () => {
    const newDate = add(date, { months: 1 })
    setDate(newDate)
  }

  const jumpToPrevYear = () => {
    const newDate = sub(date, { years: 1 })
    setDate(newDate)
  }

  const jumpToNextYear = () => {
    const newDate = add(date, { years: 1 })
    setDate(newDate)
  }

  return (
    <div className="col-span-7 w-full grid grid-cols-7">
      <Cell className="h-16 grid place-content-center">
        <button onClick={jumpToPrevYear} className="hover:bg-indigo-600 p-2 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
          </svg>
        </button>
      </Cell>
      <Cell className="h-16 grid place-content-center">
        <button onClick={jumpToPrevMonth} className="hover:bg-indigo-600 p-2 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
      </Cell>
      <Cell className="col-span-3 text-lg w-full h-16 grid place-content-center">
        {title}
      </Cell>
      <Cell className="h-16 grid place-content-center">
        <button onClick={jumpToNextMonth} className="hover:bg-indigo-600 p-2 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </Cell>
      <Cell className="h-16 grid place-content-center">
        <button onClick={jumpToNextYear} className="hover:bg-indigo-600 p-2 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </Cell>
    </div>
  )
}

export default CalenderHeader