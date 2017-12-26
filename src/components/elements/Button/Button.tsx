import * as React from 'react'

import './Button.styles.scss'

interface ButtonProps {
  content?: string
}
export const Button = (props: ButtonProps) => {
  const { content } = props
  let text = content || ''
  text = text.toUpperCase()
  
  return (
    <button>
      {text}
    </button>
  )
}