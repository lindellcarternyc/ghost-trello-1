import * as React from 'react'

import './Story.styles.css'

interface StoryProps {
  text: string
}

export const Story = (props: StoryProps) => {
  const { text } = props 
  return (
    <div className='story'>
      <p className='story--text'>
        {text}
      </p>
    </div>
  )
}