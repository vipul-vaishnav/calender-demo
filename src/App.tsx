import React, { FC, ReactElement, useState } from 'react'
import Calender from './components/Calender'
import Header from './components/Header'
import Footer from './components/Footer'
import { format } from 'date-fns'
import { toast, Toaster } from 'react-hot-toast';

const App: FC = (): ReactElement => {
  const today = new Date()
  const [date, setDate] = useState<Date>(today)

  const jumpToToday = () => {
    setDate(today)
    toast.success("Date set to today", { icon: "🗓️" })
  }

  return (
    <>
      <div className="text-base font-normal font-poppins w-full min-h-screen bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 text-white py-8">
        <main className="max-w-xl mx-auto h-auto">
          <Header />
          <div className="mt-8 flex items-center justify-between">
            <h2>
              Selected Date: <span className="font-bold text-stone-900">{format(date, "dd LLLL yyyy")}
              </span>
            </h2>

            <button className="px-6 py-3 bg-violet-600 rounded-full shadow-lg hover:bg-opacity-20" onClick={jumpToToday}>
              Jump to today
            </button>
          </div>
          <Calender date={date} setDate={setDate} />
          <Footer />
        </main>
      </div>
      <Toaster />
    </>
  )
}

export default App