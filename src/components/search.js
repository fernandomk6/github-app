import React from 'react'

const Search = ({ handleSearch, isFetching }) => {
  return (
    <div className='search'>
      <input 
        disabled={isFetching}
        autoFocus
        type='search' 
        placeholder='Digite o nome do usuário no GitHub' 
        onKeyUp={handleSearch}
      />
    </div>
  )
}

export default Search
