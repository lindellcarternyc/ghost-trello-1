import { 
  generateText, generateTextSection
} from './mock-story'

it('creates a mock story text', () => {
  const text = generateText()
  
  const paragraphs = text.split('\n \r')
  expect(paragraphs).toHaveLength(3)
})

it('should create a mock story text section', () => {
  const section = generateTextSection()
  
  const paragraphGroups = section.split('\n\n\n')
  const numParagraphGroups = paragraphGroups.length
  expect(numParagraphGroups).toBeGreaterThan(2)
  expect(numParagraphGroups).toBeLessThan(6)

  paragraphGroups.forEach(group => {
    const paragraphs = group.split('\n \r')
    const numParagraphsInGroup = paragraphs.length
    expect(numParagraphsInGroup).toBeGreaterThan(3)
    expect(numParagraphsInGroup).toBeLessThan(11)
  })
})