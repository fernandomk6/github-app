import React from 'react'
import Search from './search'
import UserInfo from './user-info'
import Actions from './actions'
import Repos from './repos'

const AppContent = ({ userInfo, repos, starred, handleSearch, handleShowRepos, handleShowStarred }) => {
  return (
    <div className='app'>
      <Search handleSearch={handleSearch} />
      {Boolean(userInfo) && <UserInfo userInfo={userInfo} />}
      {Boolean(userInfo) && <Actions handleShowRepos={handleShowRepos} handleShowStarred={handleShowStarred} />}
      
      {Boolean(repos.length) && 
        <Repos className='repos' title='Repositórios' repos={repos} />}

      {Boolean(starred.length) && 
        <Repos className='starred' title='Favoritos' repos={starred} />}
    </div>
  )
}

export default AppContent
