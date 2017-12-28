import * as React from 'react'

import './Story.styles.css'

interface StoryProp {
  title: string 
  image: string
  text: string
}

interface StoryProps {
  story: StoryProp
}

export const Story = (props: StoryProps) => {
  const { story } = props

  const { title, image, text } = story

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
      <div className='story--image--wrapper'>
        <img src={image} className='story--image' />
      </div>
      <h2>{title}</h2>
      <div className='story--text'>
        {sections}
      </div>
    </div>
  )
}