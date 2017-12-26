import * as React from 'react'

interface ButtonProps {
  content?: string
}
export const Button = (props: ButtonProps) => {
  const { content } = props
  return (
    <button>
      {content}
    </button>
  )
}