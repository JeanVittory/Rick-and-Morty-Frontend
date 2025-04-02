import { singleCharacterModel } from '../models/singleCharacter.models';

export const singleCharacterAdapater = (character: any): singleCharacterModel => {
  const formattedData = {
    id: character.character.id,
    name: character.character.name,
    image: character.character.image,
    gender: character.character.gender,
    status: character.character.status,
    species: character.character.species,
    type: character.character.type,
    origin: character.character.origin.name,
    location: character.character.location.name,
  };
  return formattedData;
};
