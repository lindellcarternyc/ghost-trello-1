import { 
  generateTextSection, generateHeaderImage, generateTitle, generateStory,
  generateAuthor, generateWrittenDate
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

it('should generate a title', () => {
  const title = generateTitle()
  const parts = title.split(':')
  expect(parts).toHaveLength(2)

  const part1Words = parts[0].split(' ')
  expect(part1Words.length).toBeGreaterThan(2)
  expect(part1Words.length).toBeLessThan(6)

  const part2Words = parts[1].split(' ')
  expect(part2Words.length).toBeGreaterThan(5)
  expect(part2Words.length).toBeLessThan(11)
})

it('should generate an author name', () => {
  const author = generateAuthor()
  const names = author.split(' ')
  expect(names.length).toBeGreaterThanOrEqual(2)
  expect(names.length).toBeLessThanOrEqual(4)
})

it('should generate a written date', () => {
  const written = generateWrittenDate()
  const parts = written.split(' ')
  expect(parts).toHaveLength(3)
})

it('should create a mock story', () => {
  const story = generateStory()

  const { title, author, written, image, text } = story

  const names = author.split(' ')
  expect(names.length).toBeGreaterThanOrEqual(2)
  expect(names.length).toBeLessThanOrEqual(4)

  const dateParts = written.split(' ')
  expect(dateParts).toHaveLength(3)

  const parts = title.split(':')
  expect(parts).toHaveLength(2)

  const part1Words = parts[0].split(' ')
  expect(part1Words.length).toBeGreaterThan(2)
  expect(part1Words.length).toBeLessThan(6)

  const part2Words = parts[1].split(' ')
  expect(part2Words.length).toBeGreaterThan(5)
  expect(part2Words.length).toBeLessThan(11)

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