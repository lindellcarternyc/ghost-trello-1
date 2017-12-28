import * as React from 'react'

import { Button } from './components/elements/Button/Button'
import { Story } from './components/views/Story/Story'

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

class App extends React.Component {
  render() {
    return (
      <div>
        <h2>ghost-trello</h2>
        <Button content='Hello World'/>
        <br />
        <br />
        <Story description={MOCK_STORY.description}/>
      </div>
    )
  }
}

export default App