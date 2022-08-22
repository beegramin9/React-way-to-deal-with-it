import React from 'react'

type Props = {
  children: React.ReactNode
}

export function TodoTemplate({children}: Props) {
  return (
    <div className='"TodoTemplate'>
      <div className='app-title'>일정 관리</div>
      <div className='content'>{children}</div>
    </div>
  )
}