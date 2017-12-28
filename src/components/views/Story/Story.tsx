import * as React from 'react'

import './Story.styles.css'

interface StoryProps {
  description: string
}

export const Story = (props: StoryProps) => {
  const { description } = props 
  return (
    <div className='story'>
      <p className='description'>
        {description}
      </p>
    </div>
  )
}