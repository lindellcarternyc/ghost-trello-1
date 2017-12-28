import { generateText } from './mock-story'

it('creates a mock story text', () => {
  const text = generateText()
  
  const paragraphs = text.split('\n \r')
  expect(paragraphs).toHaveLength(3)
})