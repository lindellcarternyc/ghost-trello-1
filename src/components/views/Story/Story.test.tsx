import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as renderer from 'react-test-renderer'

import { Story } from './Story'

const MOCK_STORY = {
  description: 
    // tslint:disable-next-line:quotemark
    "Mount Everest, also known in Nepal as Sagarmāthā and in Tibet as Chomolungma, is Earth's highest mountain. " +
    // tslint:disable-next-line:quotemark
    "It is located in the Mahalangur mountain range in Nepal. Its peak is 8,848 metres (29,029 ft) above sea level. " +
    // tslint:disable-next-line:quotemark
    "It is not the furthest summit from the centre of the Earth. That honour goes to Mount Chimborazo," +
    // tslint:disable-next-line:quotemark
    " in the Andes.[10] The international border between China and Nepal runs across Everest's precise summit point. "
    // tslint:disable-next-line:quotemark
    + "Its massif includes neighbouring peaks Lhotse, 8,516 m (27,940 ft);"
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