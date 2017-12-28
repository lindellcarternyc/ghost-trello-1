import * as React from 'react'

interface AppShellProps {
  children?: JSX.Element[]
}

export const AppShell = (props: AppShellProps) => {
  const { children } = props
  return (
    <div>
      {children}
    </div>
  )
}