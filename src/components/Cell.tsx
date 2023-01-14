import React, { FC, ReactElement } from 'react'
import { ICell } from './interfaces/ICell'

const Cell: FC<ICell> = (props): ReactElement => {
  const { children, className } = props

  return (
    <div className={className}>{children}</div>
  )
}

export default Cell