import * as React from 'react'

import { Button } from './components/elements/Button/Button'
import { Story } from './components/views/Story/Story'

class App extends React.Component {
  render() {
    return (
      <div>
        <h2>ghost-trello</h2>
        <Button content='Hello World'/>
        <br />
        <br />
        <Story />
      </div>
    )
  }
}

export default App