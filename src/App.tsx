import React, { FC, ReactElement } from 'react'
import Calender from './components/Calender'
import Header from './components/Header'
import Footer from './components/Footer'

const App: FC = (): ReactElement => {
  return (
    <div className="text-base font-normal font-poppins w-full min-h-screen bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 text-white py-8">
      <main className="max-w-3xl mx-auto h-auto">
        <Header />
        <Calender />
        <Footer />
      </main>
    </div>
  )
}

export default App