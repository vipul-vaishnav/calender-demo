import { Dispatch, SetStateAction } from "react"

export interface ICalender {
    date: Date
    setDate: Dispatch<SetStateAction<Date>>
}