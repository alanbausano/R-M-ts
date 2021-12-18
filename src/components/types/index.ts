export type Character = {
  id: number
  name: string
  status: string
  gender: string
  location: Location
  species: string
  image: string
  origin: Origin
  info: Info
}

export type Origin = {
  name: string
}

export type Location = {
  name: string
}

export enum CharacterDetailsEnum {
  NAME = 'Name: ',
  STATUS = 'Status: ',
  PLANET = 'Planet: ',
  SPECIES = 'Species: ',
  GENDER = 'Gender: '
}

export type Info = {
  next: string | null;
  count: number;
  pages: number;
  prev: string | null;
};