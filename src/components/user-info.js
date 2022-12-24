'use strict'

import React from 'react'

const UserInfo = ({ userInfo }) => {
  return (
    <div className='user-info'>
      <img src={userInfo.avatar_url} alt={userInfo.name} />

      <h1 className='username'>
        <a href={userInfo.html_url} target='_blank'>{userInfo.name}</a>
      </h1>

      <ul className='repos-info'>
        <li>Repositórios: {userInfo.public_repos}</li>
        <li>Seguidores: {userInfo.followers}</li>
        <li>Seguindo: {userInfo.following}</li>
      </ul>
    </div>
  )
}

export default UserInfo