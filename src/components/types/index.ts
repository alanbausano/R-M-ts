export type Character = {
  id: number
  name: string
  status: string
  gender: string
  location: Location
  species: string
  image: string
  planet: string
}

export type Location = {
  name: string
}

export enum CharacterDetailsEnum {
  NAME = 'Name: ',
  STATUS = 'Status: ',
  PLANET = 'Planet :',
  SPECIES = 'Species: ',
  GENDER = 'Gender: '

}