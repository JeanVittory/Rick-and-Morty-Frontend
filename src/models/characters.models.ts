export type Characters = {
  id: number;
  name: string;
  image?: string;
  status: string;
  species: string;
};

export type CharactersData = {
  characters: {
    info: {
      count: number;
      pages: number;
      next: number;
      prev: number;
    };
    results: Characters[];
  };
};
