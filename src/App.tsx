import * as React from 'react'

import { Button } from './components/elements/Button/Button'
import { Story } from './components/views/Story/Story'

import { generateStory } from './mocks/mock-story'

const MOCK_STORY = generateStory()

class App extends React.Component {
  render() {
    return (
      <div>
        <h2>ghost-trello</h2>
        <Button content='Hello World'/>
        <br />
        <br />
        <Story text={MOCK_STORY.text} image={MOCK_STORY.image}/>
      </div>
    )
  }
}

export default App