import * as faker from 'faker'

export const generateTextSection = (): string => {
  const numParagraphGroups = faker.random.number({min: 3, max: 5})
  
  let section: string[] = []
  for (let i = 0; i < numParagraphGroups; i++) {
    const numParagraphsInGroup = faker.random.number({min: 4, max: 10})
    const paragraphGroup = faker.lorem.paragraphs(numParagraphsInGroup)
    section.push(paragraphGroup)
  }

  return section.join('\n\n\n')
}

export const generateHeaderImage = (): string => {
  return faker.image.abstract()
}

export const generateTitle = (): string => {
  let p1 = faker.lorem.sentence(3, 5)
  p1 = p1.slice(0, p1.length - 1) + ': '

  let p2 = faker.lorem.sentence(6, 10)
  p2 = p2.slice(0, p2.length - 1)
  return p1 + p2
  // return ''
}

export const generateAuthor = (): string => {
  return faker.name.findName()
}

const MONTHS = [
  'January', 'February', 'March', 'April', 'May',
  'June', 'July', 'August', 'September', 'October',
  'November', 'December'
]

export const generateWrittenDate = () => {
  const dateObj = faker.date.past(1)
  const year = dateObj.getFullYear()
  const month = MONTHS[dateObj.getMonth()]
  const date = dateObj.getDate()
  return `${month} ${date}, ${year}`
}

export const generateStory = (): {
  title: string, author: string, written: string, image: string, text: string
} => {
  const title = generateTitle()
  const author = generateAuthor()
  const written = generateWrittenDate()
  const image = generateHeaderImage()
  const text = generateTextSection()

  return {
    title,
    author,
    written,
    image,
    text
  }

}