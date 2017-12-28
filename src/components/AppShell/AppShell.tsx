import * as React from 'react'

interface AppShellProps {
  children?: JSX.Element[]
}

import './AppShell.styles.css'

export const AppShell = (props: AppShellProps) => {
  const { children } = props
  return (
    <div className='appShell'>
      <div className='appShell--menuButtons'>
        <button className='appShell--menuButton'>
          <i className='fas fa-plus' />
        </button>
        <br />
        <button className='appShell--menuButton'>
          <i className='fas fa-search' />
        </button>
      </div>
      {children}
    </div>
  )
}