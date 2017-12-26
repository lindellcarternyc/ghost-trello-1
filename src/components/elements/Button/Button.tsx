import * as React from 'react'

import './Button.styles.css'

interface ButtonProps {
  content?: string
}
export const Button = (props: ButtonProps) => {
  const { content } = props
  let text = content || ''
  text = text.toUpperCase()
  
  return (
    <div>
      <button>
        {text}
      </button>
    </div>
  )
}