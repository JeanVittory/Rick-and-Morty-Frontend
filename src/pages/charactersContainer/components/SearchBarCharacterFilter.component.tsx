import { SlidersVertical, SearchIcon } from 'lucide-react';
import { SearchBarCharacterFilterType } from '../../../models/characters.models';

export const SearchBarCharacterFilter = ({
  searchTerm,
  handleSearchChange,
  toggleFilterModal,
}: SearchBarCharacterFilterType) => {
  return (
    <div className='relative mb-4'>
      <input
        type='text'
        placeholder='Search or filter results'
        className='w-full py-2 pl-8 pr-4 border border-gray-200 rounded-md'
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
        <SearchIcon className='w-4 h-4 text-purple-500' />
      </div>
      <div className='absolute inset-y-0 right-3 flex items-center'>
        <button onClick={toggleFilterModal} className='cursor-pointer'>
          <SlidersVertical className='w-4 h-4 text-purple-primary' />
        </button>
      </div>
    </div>
  );
};
