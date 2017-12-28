import * as React from 'react'

import { Button } from './components/elements/Button/Button'
import { Story } from './components/views/Story/Story'

import { AppShell } from './components/AppShell/AppShell'

import { generateStory } from './mocks/mock-story'

const MOCK_STORY = generateStory()

class App extends React.Component {
  render() {
    return (
      <AppShell>
        <h2>ghost-trello</h2>
        <Button content='Hello World'/>
        <br />
        <br />
        <Story story={MOCK_STORY}/>
      </AppShell>
    )
  }
}

export default App