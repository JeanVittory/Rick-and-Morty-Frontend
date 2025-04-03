import { lazy } from 'react';

export const AllCharactersContainer = lazy(() =>
  import('../pages/charactersContainer/AllCharactersContainer.pages').then(
    ({ AllCharactersContainer }) => ({ default: AllCharactersContainer }),
  ),
);
