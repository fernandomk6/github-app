import React from 'react'

const UserInfo = ({ userInfo }) => {
  return (
    <div className='user-info'>
      <img src={userInfo.photo} alt={userInfo.name} />

      <h1 className='username'>
        <a href={userInfo.link} target='_blank' rel='noreferrer'>{userInfo.name}</a>
      </h1>

      <ul className='repos-info'>
        <li>Repositórios: {userInfo.repos}</li>
        <li>Seguidores: {userInfo.followers}</li>
        <li>Seguindo: {userInfo.following}</li>
      </ul>
    </div>
  )
}

export default UserInfo