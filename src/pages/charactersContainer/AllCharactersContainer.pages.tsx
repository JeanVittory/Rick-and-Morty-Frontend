import { ChangeEvent, useEffect, useState } from 'react';
import { charactersAdapter } from '../../adapters/AllCharacters.adapters';
import { fetchAllCharacters } from '../../services/fetchingCharacters.service';
import { useDispatch, useSelector } from 'react-redux';
import { Spinner } from '../../components/Spinner';
import { useInfiniteScroll } from '../../hooks/useInfiniteScroll';
import { getAllCharacters } from '../../redux/charactersSlice/characterSlice.redux';
import {
  addFavorite,
  removeFavorite,
} from '../../redux/favoriteCharacteresSlice/favoriteCharacters.slice';
import { CharacterDetail } from './components/CharacterDetail.component';
import { AllCharacters } from './components/AllCharacters.component';
import { StarredCharacters } from './components/StarredCharacters.component';
import { CharacterFilters } from './components/CharactersFilter.component';
import { SearchBarCharacterFilter } from './components/SearchBarCharacterFilter.component';
import { useIsMobile } from '../../hooks/useIsMobile';
import { Characters } from '../../models/characters.models';

export const AllCharactersContainer = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [sortOrder, setSortOrder] = useState<string>('ASC');
  const [allCharacters, setAllCharacters] = useState<Characters[]>([]);
  const [statusFilter, setStatusFilter] = useState<string>('');
  const [speciesFilter, setSpeciesFilter] = useState<string>('');
  const [genderFilter, setGenderFilter] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [favoriteCharacters, setFavoriteCharacters] = useState<any[]>([]);
  const [selectedCharacter, setSelectedCharacter] = useState<any>(null);
  const [showFilterModal, setShowFilterModal] = useState<boolean>(false);
  const [showDetailMobile, setShowDetailMobile] = useState<boolean>(false);
  const isMobile = useIsMobile();

  const dispatch = useDispatch();
  const itemsPerPage = 20;
  const { visibleItems, isFetching } = useInfiniteScroll(allCharacters, itemsPerPage);
  const dataFromRedux = useSelector((state: any) => state.allCharacters);

  useEffect(() => {
    const loadCharacters = async () => {
      try {
        setLoading(true);
        const characters = await fetchAllCharacters('name', sortOrder);
        setAllCharacters(characters);

        if (characters.length > 0 && !selectedCharacter) {
          setSelectedCharacter(characters[0]);
        }
      } catch (error) {
        console.error('Error loading characters:', error);
      } finally {
        setLoading(false);
      }
    };
    loadCharacters();
  }, [sortOrder]);

  useEffect(() => {
    const filteredCharacters = visibleItems.filter((character) => {
      const nameMatch = character.name.toLowerCase().includes(searchTerm.toLowerCase());
      return (
        nameMatch &&
        (statusFilter ? character.status === statusFilter : true) &&
        (speciesFilter ? character.species === speciesFilter : true) &&
        (genderFilter ? character.gender === genderFilter : true)
      );
    });

    const formattedData = charactersAdapter(filteredCharacters);
    dispatch(getAllCharacters(formattedData));
  }, [statusFilter, speciesFilter, genderFilter, visibleItems, searchTerm, dispatch]);

  const toggleFavorite = (character: any) => {
    const isAlreadyFavorite = favoriteCharacters.some((fav) => fav.id === character.id);

    if (isAlreadyFavorite) {
      setFavoriteCharacters(favoriteCharacters.filter((fav) => fav.id !== character.id));
      dispatch(removeFavorite(character.id));
    } else {
      setFavoriteCharacters([...favoriteCharacters, character]);
      dispatch(addFavorite(character));
    }
  };

  const handleChangeOrder = (e: string) => {
    setSortOrder(e);
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleCharacterSelect = (character: any) => {
    if (isMobile) setShowDetailMobile(true);
    setSelectedCharacter(character);
  };

  const toggleFilterModal = () => {
    setShowFilterModal(!showFilterModal);
  };

  const handleFilterChange = (filterType: string, value: string) => {
    switch (filterType) {
      case 'character':
        if (value === 'Starred') {
          const starredCharacters = allCharacters.filter((character) =>
            favoriteCharacters.some((fav) => fav.id === character.id),
          );
          dispatch(getAllCharacters(charactersAdapter(starredCharacters)));
        } else if (value === 'All') {
          dispatch(getAllCharacters(charactersAdapter(visibleItems)));
        }
        break;
      case 'specie':
        setSpeciesFilter(value === 'All' ? '' : value);
        break;
      default:
        break;
    }
  };

  const applyFilters = () => {
    setShowFilterModal(false);
  };

  if (loading && visibleItems.length === 0) {
    return (
      <div className='bg-[#fdfcdc] w-screen h-screen flex justify-center items-center'>
        <Spinner />
      </div>
    );
  }

  return (
    <main className='flex h-screen bg-white overflow-hidden'>
      <div
        className={`
  ${isMobile && showDetailMobile ? 'hidden' : ''} 
  w-full md:w-72 border-r border-gray-200 bg-white
`}
      >
        <div className='p-4'>
          <h1 className='text-xl font-normal mb-4'>Rick and Morty list</h1>

          <SearchBarCharacterFilter
            handleSearchChange={handleSearchChange}
            searchTerm={searchTerm}
            toggleFilterModal={toggleFilterModal}
          />

          <CharacterFilters
            applyFilters={applyFilters}
            handleFilterChange={handleFilterChange}
            handleSearchChange={handleSearchChange}
            searchTerm={searchTerm}
            showFilterModal={showFilterModal}
            speciesFilter={speciesFilter}
            statusFilter={statusFilter}
            toggleFilterModal={toggleFilterModal}
            handleChangeOrder={handleChangeOrder}
            sortOrder={sortOrder}
          />

          <StarredCharacters
            favoriteCharacters={favoriteCharacters}
            handleCharacterSelect={handleCharacterSelect}
            selectedCharacter={selectedCharacter}
            toggleFavorite={toggleFavorite}
          />

          <AllCharacters
            dataFromRedux={dataFromRedux}
            favoriteCharacters={favoriteCharacters}
            isFetching={isFetching}
            handleCharacterSelect={handleCharacterSelect}
            selectedCharacter={selectedCharacter}
            toggleFavorite={toggleFavorite}
            visibleItems={visibleItems}
          />
        </div>
      </div>

      <CharacterDetail
        toggleFavorite={toggleFavorite}
        selectedCharacter={selectedCharacter}
        favoriteCharacters={favoriteCharacters}
        showDetailMobile={showDetailMobile}
        setShowDetailMobile={setShowDetailMobile}
      />
    </main>
  );
};
