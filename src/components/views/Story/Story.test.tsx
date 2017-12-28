import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as renderer from 'react-test-renderer'

import { Story } from './Story'

import { generateTextSection } from '../../../mocks/mock-story'

const MOCK_STORY = {
  text: generateTextSection()
}

it('renders a story without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Story text={MOCK_STORY.text}/>, div)
})

it('accepts a text prop that is a string and renders it', () => {
  const story = renderer.create(
    <Story text={MOCK_STORY.text}/>
  )

  const tree = story.toJSON()
  expect(tree).toMatchSnapshot()
})