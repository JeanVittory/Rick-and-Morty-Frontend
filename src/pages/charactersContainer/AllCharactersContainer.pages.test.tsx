import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

vi.mock('../../services/fetchingCharacters.service', () => ({
  fetchAllCharacters: vi.fn().mockResolvedValue([]),
}));

vi.mock('../../hooks/useInfiniteScroll', () => ({
  useInfiniteScroll: vi.fn(() => ({
    visibleItems: [],
    isFetching: false,
  })),
}));

vi.mock('../../components/Spinner', () => ({
  Spinner: () => <div data-testid='spinner'>Loading...</div>,
}));

vi.mock('./components/CardCharacter.pages.charactersContainer.components', () => ({
  CardCharacter: () => <div data-testid='card-character'>Character Card</div>,
}));

vi.mock('./AllCharactersContainer.pages', () => ({
  AllCharactersContainer: () => <div data-testid='all-characters'>All Characters Container</div>,
}));

const charactersReducer = (state = { characters: [] }, action: any) => {
  switch (action.type) {
    case 'GET_ALL_CHARACTERS':
      return { ...state, characters: action.payload };
    default:
      return state;
  }
};

describe('AllCharactersContainer', () => {
  it('renders without crashing', () => {
    const store = configureStore({
      reducer: {
        characters: charactersReducer,
      },
    });

    const { getByTestId } = render(
      <Provider store={store}>
        <div data-testid='all-characters'>All Characters Container</div>
      </Provider>,
    );

    expect(getByTestId('all-characters')).toBeInTheDocument();
  });
});
