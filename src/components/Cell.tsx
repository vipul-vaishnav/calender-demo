import React, { FC, ReactElement } from 'react'
import { ICell } from './interfaces/ICell'

const Cell: FC<ICell> = (props): ReactElement => {
  const { children, className, onClick = () => { } } = props

  return (
    <div className={className} onClick={() => onClick(children as number)}>{children}</div>
  )
}

export default Cell