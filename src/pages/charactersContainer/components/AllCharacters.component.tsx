import { HeartIcon } from 'lucide-react';
import { Spinner } from '../../../components/Spinner';
import { AllCharacterType } from '../../../models/characters.models';

export const AllCharacters = ({
  dataFromRedux,
  visibleItems,
  selectedCharacter,
  handleCharacterSelect,
  favoriteCharacters,
  toggleFavorite,
  isFetching,
}: AllCharacterType) => {
  return (
    <div>
      <h2 className='text-sm font-semibold text-gray-500 mb-2'>
        CHARACTERS <span className='font-nunito'>({visibleItems.length})</span>
      </h2>
      <div className='space-y-2 max-h-screen overflow-y-auto'>
        {dataFromRedux.data.map((character: any) => (
          <div
            key={character.id}
            className={`flex justify-between items-center p-2 rounded-md cursor-pointer ${
              selectedCharacter?.id === character.id ? 'bg-lavender' : 'hover:bg-gray-100'
            }`}
            onClick={() => handleCharacterSelect(character)}
          >
            <div className='flex items-center'>
              <div className='w-8 h-8 rounded-full overflow-hidden mr-2'>
                <img
                  src={character.image}
                  alt={character.name}
                  className='w-full h-full object-cover'
                />
              </div>
              <span className='flex-1f font-nunito'>{character.name}</span>
            </div>
            <button
              className={`px-1 ${
                favoriteCharacters.some((fav: any) => fav.id === character.id)
                  ? 'text-green-500'
                  : 'text-gray-300'
              }`}
              onClick={(e) => {
                e.stopPropagation();
                toggleFavorite(character);
              }}
            >
              <HeartIcon
                className={`w-4 h-4 ${
                  favoriteCharacters.some((fav: any) => fav.id === character.id)
                    ? 'fill-green-500'
                    : ''
                }`}
              />
            </button>
          </div>
        ))}
        <div className='border-t border-gray-200' />
        {isFetching && (
          <div className='py-2 flex justify-center'>
            <Spinner />
          </div>
        )}
      </div>
    </div>
  );
};
