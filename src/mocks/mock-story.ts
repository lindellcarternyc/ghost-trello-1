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