import { HeartIcon } from 'lucide-react';
import { StarredCharactersType } from '../../../models/characters.models';

export const StarredCharacters = ({
  favoriteCharacters,
  handleCharacterSelect,
  selectedCharacter,
  toggleFavorite,
}: StarredCharactersType) => {
  return (
    <div className='mb-4'>
      <h2 className='text-sm font-greycliff font-semibold text-gray-500 mb-2'>
        STARRED CHARACTERS <span className='font-nunito'>({favoriteCharacters.length})</span>
      </h2>
      <div className='space-y-2'>
        {favoriteCharacters.map((character) => (
          <div
            key={`fav-${character.id}`}
            className={`flex items-center p-2 rounded-md cursor-pointer ${
              selectedCharacter?.id === character.id ? 'bg-lavender' : 'hover:bg-gray-100'
            }`}
            onClick={() => handleCharacterSelect(character)}
          >
            <div className='w-8 h-8 rounded-full overflow-hidden mr-2'>
              <img
                src={character.image}
                alt={character.name}
                className='w-full h-full object-cover'
              />
            </div>
            <span className='flex-1 font-nunito'>{character.name}</span>
            <button
              className='text-green-500'
              onClick={(e) => {
                e.stopPropagation();
                toggleFavorite(character);
              }}
            >
              <HeartIcon className='w-4 h-4 fill-green-500' />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
