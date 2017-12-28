import { 
  generateTextSection, generateHeaderImage, generateStory
} from './mock-story'

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

it('should create a mock story header image url', () => {
  const image = generateHeaderImage()
  expect(image).toMatch('http://lorempixel.com/640/480/abstract')
})

it('should create a mock story', () => {
  const story = generateStory()

  const { image, text } = story
  expect(image).toMatch('http://lorempixel.com/640/480/abstract')

  const paragraphGroups = text.split('\n\n\n')
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