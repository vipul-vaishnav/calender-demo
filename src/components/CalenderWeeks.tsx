import React, { FC, ReactElement } from 'react'
import { ICalenderWeeks } from './interfaces/ICalenderWeeks'
import Cell from './Cell'

const CalenderWeeks: FC<ICalenderWeeks> = (props): ReactElement => {
  const { days } = props

  return (
    <div className="col-span-7 w-full grid grid-cols-7">
      {days.map((day, index) => {
        return <Cell key={index} className="h-16 grid place-content-center">
          <h2 className="font-bold text-stone-700">{day}</h2>
        </Cell>
      })}
    </div>
  )
}

export default CalenderWeeks