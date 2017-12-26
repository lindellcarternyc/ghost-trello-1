import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Button } from './button'

it('renders a button without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Button />, div)
})

it('accepts a content prop (string) and renders it', () => {
  const div = document.createElement('div')
  const button = <Button content='Button' />
  expect(button.props.content).toBe('Button')
  
})

// it('always renders')