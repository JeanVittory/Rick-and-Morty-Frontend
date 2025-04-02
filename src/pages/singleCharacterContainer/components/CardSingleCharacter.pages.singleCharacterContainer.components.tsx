import { useSelector } from 'react-redux';
import { rootStateFromRedux } from '../../../models/useSelectorReturn.models';
import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

export const CardSingleCharacter = () => {
  const singleCharacterFromRedux = useSelector(
    (state: rootStateFromRedux) => state.singleCharacter.value,
  );

  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <section>
      <figure className='lg:w-9/12 md:w-full mx-auto grid grid-cols-1 md:grid-cols-2 mt-20'>
        <div className='w-full flex justify-center items-center'>
          <img src={singleCharacterFromRedux.image} alt='avatar' className='rounded-xl max-w-max' />
        </div>

        <figcaption className='flex flex-col justify-center gap-y-2 mt-4 md:mt-0 p-4'>
          <div className='flex justify-between'>
            <h2 className='font-nuntio font-bold text-lg'>Information:</h2>
            <button onClick={toggleFavorite} className='bg-opacity-50 rounded-full'>
              <FaStar
                className={`text-2xl transition-colors ${
                  isFavorite ? 'text-yellow-500' : 'text-gray-400'
                }`}
              />
            </button>
          </div>
          <p className='font-nunito font-semibold p-1 border-b-2'>
            Name: <span className='font-normal tracking-wide'>{singleCharacterFromRedux.name}</span>
          </p>
          <p className='font-nunito font-semibold p-1 border-b-2'>
            Status: <span className='font-normal'>{singleCharacterFromRedux.status}</span>
          </p>
          <p className='font-nunito font-semibold p-1 border-b-2'>
            Origin:{' '}
            <span className='font-normal tracking-wide'>{singleCharacterFromRedux.origin}</span>
          </p>
          <p className='font-nunito font-semibold p-1 border-b-2'>
            Location:{' '}
            <span className='font-normal tracking-wide'>{singleCharacterFromRedux.location}</span>
          </p>
          <p className='font-nunito font-semibold p-1 border-b-2'>
            Gender:{' '}
            <span className='font-normal tracking-wide'>{singleCharacterFromRedux.gender}</span>
          </p>
          <p className='font-nunito font-semibold p-1 border-b-2'>
            Species:{' '}
            <span className='font-normal tracking-wide'>{singleCharacterFromRedux.species}</span>
          </p>
          {singleCharacterFromRedux.type && (
            <p className='font-nunito font-semibold'>
              Type:{' '}
              <span className='font-normal tracking-wide'>{singleCharacterFromRedux.type}</span>
            </p>
          )}
        </figcaption>
      </figure>
    </section>
  );
};
