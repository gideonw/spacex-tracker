import { readdirSync, readFileSync } from 'fs';
import { join } from 'path';

const dataDirectory = 'data/starship'

export interface StarshipModel {
  name: string
  title: string
  state: string
  description: string
  location: string
  image: string
  notes: string[]
}

export function getAllStarshipNames() {
  const fileNames = readdirSync(dataDirectory)

  return fileNames.map(fileName => {
    return {
      params: {
        name: fileName.replace(/\.json$/, '')
      }
    }
  })
}

export function getStarshipData(name: string): StarshipModel {
  const filePath = join(dataDirectory, `${name}.json`)
  const fileContent = readFileSync(filePath, 'utf8');

  const data: StarshipModel = JSON.parse(fileContent)
  return {
    name: name,
    ...data
  }
}