import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as renderer from 'react-test-renderer'

import { Story } from './Story'

import { generateDescription } from '../../../mocks/mock-story'

const MOCK_STORY = {
  description: generateDescription()
}

// describe('Story', () => {
it('renders a story without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Story description={MOCK_STORY.description}/>, div)
})

it('accepts a description prop that\'s a string', () => {
  const story = renderer.create(
    <Story description={MOCK_STORY.description} />
  )
  const tree = story.toJSON()
  expect(tree).toMatchSnapshot()
})
// })