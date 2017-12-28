import * as React from 'react'

import './Story.styles.css'

interface StoryProps {
  text: string
}

export const Story = (props: StoryProps) => {
  const { text } = props
  const sections = text.split('\n\n\n').map((section, idx) => {
    const paragraphs = section.split('\n \r').map((para, idy) => {
      return (
        <p key={idy}>{para}</p>
      )
    })
    return (
      <div key={idx} className='story--text--section'>
        {paragraphs}
      </div>
    )
  })
  return (
    <div className='story'>
      <div className='story--text'>
        {sections}
      </div>
    </div>
  )
}