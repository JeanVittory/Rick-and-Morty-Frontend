import { Characters } from '../models/characters.models';

export const charactersAdapter = (characters: any): Characters => {
  const formattedResponse = characters.map((character: any) => {
    const obj: Characters = {
      id: character.id,
      name: character.name,
      image: character.image,
      status: character.status,
      species: character.species,
    };
    return obj;
  });
  return formattedResponse;
};
