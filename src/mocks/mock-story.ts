import * as faker from 'faker'

export const generateDescription = (): string => {
  return 'hello'
}

export const generateText = (): string => {
  const paragraphs = faker.lorem.paragraphs()
  return paragraphs
}