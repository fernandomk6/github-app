import React from 'react'

const Search = ({ handleSearch }) => {
  return (
    <div className='search'>
      <input 
        autoFocus
        type='search' 
        placeholder='Digite o nome do usuário no GitHub' 
        onKeyUp={handleSearch}
      />
    </div>
  )
}

export default Search
