import * as React from 'react'

import { Button } from './components/elements/Button/Button'
import { Story } from './components/views/Story/Story'

import { generateText } from './mocks/mock-story'

const MOCK_STORY = {
  text: generateText()
}

class App extends React.Component {
  render() {
    return (
      <div>
        <h2>ghost-trello</h2>
        <Button content='Hello World'/>
        <br />
        <br />
        <Story text={MOCK_STORY.text}/>
      </div>
    )
  }
}

export default App