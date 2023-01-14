import { format } from 'date-fns/esm'
import React, { FC, ReactElement } from 'react'

const Footer: FC = (): ReactElement => {
  const year = format(new Date(), "yyyy")
  return (
    <footer className="bg-purple-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100 p-3 shadow-lg">
      <p className="text-center">&copy; {year} <a href="https://github.com/vipul-vaishnav/" target="_blank" rel="noopener noreferrer" className="italic hover:underline">Vipul Vaishnav</a> | All Rights Reserved.</p>
    </footer>
  )
}

export default Footer