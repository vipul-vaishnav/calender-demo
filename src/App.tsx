import React, { FC, ReactElement, useState } from 'react'
import Calender from './components/Calender'
import Header from './components/Header'
import Footer from './components/Footer'
import { format } from 'date-fns'
import { Toaster } from 'react-hot-toast';

const App: FC = (): ReactElement => {
  const today = new Date()
  const [date, setDate] = useState<Date>(today)

  return (
    <>
      <div className="text-base font-normal font-poppins w-full min-h-screen bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 text-white py-8">
        <main className="max-w-xl mx-auto h-auto">
          <Header />
          <div className="mt-6 text-center">Date: {format(date, "dd LLLL yyyy")}</div>
          <Calender date={date} setDate={setDate} />
          <Footer />
        </main>
      </div>
      <Toaster />
    </>
  )
}

export default App