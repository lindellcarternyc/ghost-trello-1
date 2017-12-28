import * as React from 'react'

import './Story.styles.css'

interface StoryProps {
  text: string
}

export const Story = (props: StoryProps) => {
  const { text } = props 
  const paragraphs = text.split('\n \r').map((val, idx) => {
    return (
      <p key={idx}>{val}</p>
    )
  })
  return (
    <div className='story'>
      <div className='story--text'>
        {paragraphs}
      </div>
    </div>
  )
}