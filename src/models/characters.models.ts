import { ChangeEvent } from 'react';

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

export type SelectedCharacter = {
  id: number;
  name: string;
  image: string;
  species: string;
  status: string;
  type: string;
};

export type AllCharacterType = {
  dataFromRedux: {
    data: Characters[];
  };
  visibleItems: Characters[];
  selectedCharacter: Characters | null;
  handleCharacterSelect: (character: Characters) => void;
  favoriteCharacters: Characters[];
  toggleFavorite: (character: Characters) => void;
  isFetching: boolean;
};

export type StarredCharactersType = {
  selectedCharacter: Characters | null;
  handleCharacterSelect: (character: Characters) => void;
  favoriteCharacters: Characters[];
  toggleFavorite: (character: Characters) => void;
};

export type CharacterFilterType = {
  showFilterModal: boolean;
  toggleFilterModal: () => void;
  searchTerm: string;
  handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
  statusFilter: string;
  handleFilterChange: (filterType: string, value: string) => void;
  speciesFilter: string;
  applyFilters: () => void;
  handleChangeOrder: (e: string) => void;
  sortOrder: string;
};

export type SearchBarCharacterFilterType = {
  searchTerm: string;
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  toggleFilterModal: () => void;
};
