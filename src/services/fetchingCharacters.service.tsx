import { gql } from '@apollo/client';
import { apolloClient } from '../config/apolloClient';

export const singleCharacter = async (id: string) => {
  const query = gql`
    query GetCharacter($id: ID!) {
      character(id: $id) {
        id
        name
        status
        species
        type
        gender
        origin {
          name
          type
          dimension
        }
        location {
          name
          type
          dimension
        }
        image
        episode {
          id
          name
          air_date
          episode
        }
      }
    }
  `;

  const result = await apolloClient.query<CharacterData>({
    query,
    variables: { id },
    fetchPolicy: 'network-only',
  });
  return result.data;
};

export const fetchAllCharacters = async (sortField: string = 'name', sortOrder: string) => {
  const infoQuery = gql`
    query GetCharactersInfo {
      characters {
        info {
          pages
        }
      }
    }
  `;

  const infoResult = await apolloClient.query({ query: infoQuery });
  const totalPages = infoResult.data.characters.info.pages;

  const pageQueries = Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
    const query = gql`
      query GetCharacters($page: Int!) {
        characters(page: $page) {
          results {
            id
            name
            status
            species
            type
            gender
            image
          }
        }
      }
    `;

    return apolloClient.query({
      query,
      variables: { page },
      fetchPolicy: 'network-only',
    });
  });

  const allPages = await Promise.all(pageQueries);
  let allCharacters = allPages.flatMap((page) => page.data.characters.results);
  return allCharacters.sort((a, b) => {
    const compareResult = a[sortField].localeCompare(b[sortField]);
    return sortOrder === 'ASC' ? compareResult : -compareResult;
  });
};
