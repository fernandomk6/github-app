import React from 'react'

const Actions = ({ handleShowRepos, handleShowStarred }) => {
  return (
    <div className='actions'>
      <button onClick={handleShowRepos}>Ver repositórios</button>
      <button onClick={handleShowStarred}>Ver favoritos</button>
    </div>
  )
}

export default Actions
