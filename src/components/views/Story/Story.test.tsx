import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as renderer from 'react-test-renderer'

import { Story } from './Story'

import { generateStory } from '../../../mocks/mock-story'

const MOCK_STORY = generateStory()

it('renders a story without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Story story={MOCK_STORY}/>, div)
})

it('accepts a text prop that is a string and renders it', () => {
  const story = renderer.create(
    <Story story={MOCK_STORY}/>
  )

  const tree = story.toJSON()
  expect(tree).toMatchSnapshot()
})