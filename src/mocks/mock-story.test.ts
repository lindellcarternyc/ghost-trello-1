import { generateDescription } from './mock-story'

it('generates a mock story description', () => {
  const description = generateDescription()
  expect(description).toBe('hello')
})