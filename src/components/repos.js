import React from 'react'

const Repos = ({ className, title, repos }) => {
  return (
    <div className={className}>
      <h2>{title}</h2>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>
            <a href={repo.link} target='_blank' rel='noreferrer'>{repo.name}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Repos
