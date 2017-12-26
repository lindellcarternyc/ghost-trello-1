import * as React from 'react'

import { Button } from './components/elements/Button/Button'

class App extends React.Component {
  render() {
    return (
      <div>
        <h2>ghost-trello</h2>
        <Button content='Hello World'/>
      </div>
    )
  }
}

export default App