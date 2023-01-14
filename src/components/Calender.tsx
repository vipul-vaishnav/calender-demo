import React, { FC, ReactElement } from 'react'
import { endOfMonth, format, getDate, getDaysInMonth, getMonth, getYear, isToday, setDate as set_date, startOfMonth } from 'date-fns'
import Cell from './Cell'
import CalenderHeader from './CalenderHeader'
import CalenderWeeks from './CalenderWeeks'
import { ICalender } from './interfaces/ICalender'
import { toast } from 'react-hot-toast'

const DAYS_IN_A_WEEK = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

const Calender: FC<ICalender> = (props): ReactElement => {
  const { date, setDate } = props
  const start_of_month = startOfMonth(date)
  const end_of_month = endOfMonth(date)
  const number_of_days = getDaysInMonth(date)
  const pre_days = start_of_month.getDay()
  const post_days = DAYS_IN_A_WEEK.length - 1 - end_of_month.getDay()
  const day = getDate(date)
  const month = getMonth(date)
  const year = getYear(date)

  const present_day = new Date().getDate()
  const present_month = new Date().getMonth()
  const present_year = new Date().getFullYear()

  const IS_TODAY = month === present_month && year === present_year

  const handleClick = (x: number) => {
    const newDate = set_date(date, x);
    setDate(newDate)
    toast.success("Date changed to " + format(newDate, "dd LLLL yyyy"))
  }

  return (
    <section className="my-8">
      <div className="grid grid-cols-7 items-center justify-items-center text-center shadow-lg bg-purple-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100">
        <CalenderHeader date={date} setDate={setDate} />
        <CalenderWeeks days={DAYS_IN_A_WEEK} />
        {Array.from({ length: pre_days }).map((_, idx) => {
          return <Cell key={idx} className="w-full aspect-square grid place-content-center hover:bg-clip-padding hover:backdrop-filter hover:backdrop-blur-sm hover:bg-opacity-50 rounded-sm cursor-pointer" />
        })}
        {Array.from({ length: number_of_days }).map((_, idx) => {
          const date = idx + 1
          const isToday = date === present_day

          return <Cell key={idx} className={`w-full aspect-square grid place-content-center hover:bg-clip-padding rounded-sm cursor-pointer ${IS_TODAY && isToday ? "bg-gradient-to-r from-fuchsia-600 to-pink-600" : "hover:backdrop-filter hover:backdrop-blur-sm hover:bg-opacity-50"}`} onClick={handleClick}>
            {date}
          </Cell>
        })}
        {Array.from({ length: post_days }).map((_, idx) => {
          return <Cell key={idx} className="w-full aspect-square grid place-content-center hover:bg-clip-padding hover:backdrop-filter hover:backdrop-blur-sm hover:bg-opacity-50 rounded-sm cursor-pointer" />
        })}
      </div>
    </section>
  )
}

export default Calender