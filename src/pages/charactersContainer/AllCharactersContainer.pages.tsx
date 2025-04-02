import { ChangeEvent, useEffect, useState } from 'react';
import { charactersAdapter } from '../../adapters/AllCharacters.adapters';
import { fetchAllCharacters } from '../../services/fetchingCharacters.service';
import { useDispatch } from 'react-redux';
import { CardCharacter } from './components/CardCharacter.pages.charactersContainer.components';
import { Spinner } from '../../components/Spinner';
import { useInfiniteScroll } from '../../hooks/useInfiniteScroll';
import { getAllCharacters } from '../../redux/charactersSlice/characterSlice.redux';

export const AllCharactersContainer = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [sortOrder, setSortOrder] = useState<string>('ASC');
  const [allCharacters, setAllCharacters] = useState<any[]>([]);
  const [statusFilter, setStatusFilter] = useState<string>('');
  const [speciesFilter, setSpeciesFilter] = useState<string>('');
  const [genderFilter, setGenderFilter] = useState<string>('');

  const dispatch = useDispatch();
  const itemsPerPage = 20;
  const { visibleItems, isFetching } = useInfiniteScroll(allCharacters, itemsPerPage);

  useEffect(() => {
    const loadCharacters = async () => {
      try {
        setLoading(true);
        const characters = await fetchAllCharacters('name', sortOrder);
        setAllCharacters(characters);
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
      return (
        (statusFilter ? character.status === statusFilter : true) &&
        (speciesFilter ? character.species === speciesFilter : true) &&
        (genderFilter ? character.gender === genderFilter : true)
      );
    });

    const formattedData = charactersAdapter(filteredCharacters);
    dispatch(getAllCharacters(formattedData));
  }, [statusFilter, speciesFilter, genderFilter, visibleItems, dispatch]);

  if (loading && visibleItems.length === 0) {
    return (
      <div className='bg-[#fdfcdc] w-screen h-screen flex justify-center items-center'>
        <Spinner />
      </div>
    );
  }

  const handleChangeOrder = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSortOrder(value === 'ASC' ? 'DESC' : 'ASC');
  };

  return (
    <main className='bg-[#fdfcdc] h-screen'>
      {(isFetching || loading) && (
        <div className='w-full flex justify-center py-8'>
          <Spinner />
        </div>
      )}
      <div className='w-full flex justify-between gap-4 p-4 overflow-x-auto whitespace-nowrap'>
        <div className='flex gap-4 p-4'>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className='px-4 py-2 bg-gray-200 rounded-md text-gray-800'
          >
            <option value=''>All Status</option>
            <option value='Alive'>Alive</option>
            <option value='Dead'>Dead</option>
            <option value='unknown'>Unknown</option>
          </select>

          <select
            value={speciesFilter}
            onChange={(e) => setSpeciesFilter(e.target.value)}
            className='px-5 py-2 bg-gray-200 rounded-md text-gray-800'
          >
            <option value=''>All Species</option>
            <option value='Human'>Human</option>
            <option value='Alien'>Alien</option>
            <option value='Animal'>Animal</option>
            <option value='Humanoid'>Humanoid</option>
            <option value='Unknown'>Unknown</option>
            <option value='Robot'>Robot</option>
          </select>

          <select
            value={genderFilter}
            onChange={(e) => setGenderFilter(e.target.value)}
            className='px-4 py-2 bg-gray-200 rounded-md text-gray-800'
          >
            <option value=''>All Genders</option>
            <option value='Male'>Male</option>
            <option value='Female'>Female</option>
            <option value='Genderless'>Genderless</option>
            <option value='unknown'>Unknown</option>
          </select>
        </div>
        <div className='flex gap-4 p-4'>
          <select
            onChange={(e) => handleChangeOrder(e)}
            className='px-4 py-2 bg-gray-200 rounded-md text-gray-800'
          >
            <option value='DESC'>A/Z</option>
            <option value='ASC'>Z/A</option>
          </select>
        </div>
      </div>

      <section className='w-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center pb-24'>
        <CardCharacter />
      </section>
    </main>
  );
};
