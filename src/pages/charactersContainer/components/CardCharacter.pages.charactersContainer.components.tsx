import { useSelector } from 'react-redux';
import { rootStateFromRedux } from '../../../models/useSelectorReturn.models';
import { Figcaption } from './Figcaption.pages.charactersContainer.components';
import { FaSearch } from 'react-icons/fa';
import '../../../App.css';

export const CardCharacter = () => {
  const dataFromRedux = useSelector((state: rootStateFromRedux) => state.allCharacters);
  const dataCharacter = dataFromRedux.data;
  if (!dataCharacter.length)
    return (
      <div className='flex flex-col justify-center items-center  bg-[#fdfcdc] text-center mt-60'>
        <FaSearch className='no-results-icon' />
        <h3>Oops, nothing here!</h3>
        <p>Looks like the universe is empty... try another search!</p>
      </div>
    );

  return (
    <>
      {dataCharacter.map((e) => (
        <figure key={e.id} className='w-full flex flex-col justify-center items-center mt-20'>
          <img src={e.image} alt='avatar' className='rounded-full ' />
          <Figcaption id={e.id} name={e.name} status={e.status} species={e.species} />
        </figure>
      ))}
    </>
  );
};
