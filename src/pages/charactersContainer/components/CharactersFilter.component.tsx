import { SearchIcon, X } from 'lucide-react';
import { CharacterFilterType } from '../../../models/characters.models';

export const CharacterFilters = ({
  showFilterModal,
  toggleFilterModal,
  searchTerm,
  handleSearchChange,
  statusFilter,
  handleFilterChange,
  speciesFilter,
  applyFilters,
  handleChangeOrder,
  sortOrder,
}: CharacterFilterType) => {
  return (
    showFilterModal && (
      <div className='absolute top-0 left-0 w-96 bg-white shadow-lg rounded-lg z-10'>
        <div className='p-4'>
          <div className='flex justify-between items-center mb-4'>
            <h2 className='text-xl font-normal'>Rick and Morty list</h2>
            <button onClick={toggleFilterModal} className='text-gray-500'>
              <X className='w-5 h-5' />
            </button>
          </div>

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
          </div>

          <div className='mb-6'>
            <h3 className='text-gray-500 mb-2'>Character</h3>
            <div className='flex space-x-2'>
              <button
                className={`px-6 py-2 rounded-md ${
                  !statusFilter ? 'bg-lavender' : 'bg-white border border-gray-200'
                }`}
                onClick={() => handleFilterChange('character', 'All')}
              >
                All
              </button>
              <button
                className='px-6 py-2 rounded-md bg-white border border-gray-200'
                onClick={() => handleFilterChange('character', 'Starred')}
              >
                Starred
              </button>
              <button className='px-6 py-2 rounded-md bg-white border border-gray-200'>
                Others
              </button>
            </div>
          </div>

          <div className='mb-6'>
            <h3 className='text-gray-500 mb-2'>Specie</h3>
            <div className='flex space-x-2'>
              <button
                className={`px-6 py-2 rounded-md ${
                  speciesFilter === '' ? 'bg-lavender' : 'bg-white border border-gray-200'
                }`}
                onClick={() => handleFilterChange('specie', 'All')}
              >
                All
              </button>
              <button
                className={`px-6 py-2 rounded-md ${
                  speciesFilter === 'Human' ? 'bg-lavender' : 'bg-white border border-gray-200'
                }`}
                onClick={() => handleFilterChange('specie', 'Human')}
              >
                Human
              </button>
              <button
                className={`px-6 py-2 rounded-md ${
                  speciesFilter === 'Alien' ? 'bg-lavender' : 'bg-white border border-gray-200'
                }`}
                onClick={() => handleFilterChange('specie', 'Alien')}
              >
                Alien
              </button>
            </div>
          </div>

          <div className='mb-6'>
            <h3 className='text-gray-500 mb-2'>Order</h3>
            <div className='flex space-x-2'>
              <button
                className={`px-6 py-2 rounded-md font-nunito ${
                  sortOrder === 'ASC' ? 'bg-lavender' : 'bg-white border border-gray-200'
                }`}
                onClick={() => handleChangeOrder('ASC')}
              >
                A/Z
              </button>
              <button
                className={`px-6 py-2 rounded-md font-nunito ${
                  sortOrder === 'DESC' ? 'bg-lavender' : 'bg-white border border-gray-200'
                }`}
                onClick={() => handleChangeOrder('DESC')}
              >
                Z/A
              </button>
            </div>
          </div>

          <button className='w-full py-3 bg-gray-100 text-center rounded-md' onClick={applyFilters}>
            Filter
          </button>
        </div>
      </div>
    )
  );
};
