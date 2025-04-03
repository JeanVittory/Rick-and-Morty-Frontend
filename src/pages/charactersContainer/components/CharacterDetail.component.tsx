import { ArrowLeftIcon, HeartIcon } from 'lucide-react';
import { SelectedCharacter } from '../../../models/characters.models';
import { useIsMobile } from '../../../hooks/useIsMobile';
import { CommentSection } from './CommentSection.component';

export const CharacterDetail = ({
  selectedCharacter,
  favoriteCharacters,
  toggleFavorite,
  showDetailMobile,
  setShowDetailMobile,
}: {
  selectedCharacter: SelectedCharacter;
  favoriteCharacters: SelectedCharacter[];
  toggleFavorite: (character: SelectedCharacter) => void;
  showDetailMobile: boolean;
  setShowDetailMobile: (show: boolean) => void;
}) => {
  const isMobile = useIsMobile();

  if (!selectedCharacter) return null;

  const heartColor = favoriteCharacters.some((fav) => fav.id === selectedCharacter.id)
    ? 'text-green-500 fill-green-500'
    : 'text-gray-300';

  const mobileClasses = isMobile ? `${!showDetailMobile && 'hidden'}` : '';

  return (
    <div className={`${mobileClasses} flex-1 p-8 overflow-y-auto`}>
      {isMobile && (
        <button
          onClick={() => setShowDetailMobile(false)}
          className='mb-4 flex items-center gap-2 text-gray-600 hover:text-gray-900'
        >
          <ArrowLeftIcon className='w-5 h-5 text-purple-primary' />
        </button>
      )}
      <div className='mb-4 flex flex-col gap-4'>
        <div className='flex gap-2'>
          <div className='h-12 rounded-full overflow-hidden'>
            <img
              src={selectedCharacter.image}
              alt={selectedCharacter.name}
              className='w-full h-full object-cover'
            />
          </div>
          <button onClick={() => toggleFavorite(selectedCharacter)}>
            <HeartIcon className={`w-6 h-6 ${heartColor}`} />
          </button>
        </div>
        <h2 className='text-2xl font-nunito font-bold'>{selectedCharacter.name}</h2>
      </div>

      <div className='grid grid-cols-1 gap-2'>
        <div className='bg-white rounded-lg p-2'>
          <h3 className='text-sm font-medium text-[#111827] mb-2'>Specie</h3>
          <p className='text-[#6B7280]'>{selectedCharacter.species}</p>
        </div>
        <div className='border-t border-gray-200' />

        <div className='bg-white rounded-lg p-2'>
          <h3 className='text-sm font-medium text-[#111827] mb-2'>Status</h3>
          <p className='text-[#6B7280]'>{selectedCharacter.status}</p>
        </div>
        <div className='border-t border-gray-200' />

        <div className='bg-white rounded-lg p-2'>
          <h3 className='text-sm font-medium text-[#111827] mb-2'>Occupation</h3>
          <p className='text-[#6B7280]'>{selectedCharacter.type || 'Unknown'}</p>
        </div>
      </div>
      <CommentSection characterId={selectedCharacter.id} />
    </div>
  );
};
