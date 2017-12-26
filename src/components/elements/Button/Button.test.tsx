import * as React from 'react'
import * as enzyme from 'enzyme'
import { Button } from './button'

it('renders a button without crashing', () => {
  const button = enzyme.shallow(<Button />)
  expect(button)
})

it('accepts a content prop (string) and renders it', () => {
  const button = enzyme.shallow(<Button content='Button' />)
  expect(button.text()).toBe('Button')
})