import { lazy } from 'react';

export const AllCharactersContainer = lazy(() =>
  import('../pages/charactersContainer/AllCharactersContainer.pages').then(
    ({ AllCharactersContainer }) => ({ default: AllCharactersContainer }),
  ),
);
export const SingleCharacterContainer = lazy(() =>
  import('../pages/singleCharacterContainer/SingleCharacterContainer.pages').then(
    ({ SingleCharacterContainer }) => ({
      default: SingleCharacterContainer,
    }),
  ),
);
