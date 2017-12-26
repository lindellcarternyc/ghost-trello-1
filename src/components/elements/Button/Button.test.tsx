import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Button } from './button'

import * as renderer from 'react-test-renderer'

it('renders a button without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Button />, div)
})

it('accepts a content prop (string) and renders it', () => {
  const button = renderer.create(
    <Button content='Button' />
  )

  const tree = button.toJSON()
  expect(tree).toMatchSnapshot()
})

// it('always renders')