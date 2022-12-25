import './style.css'

import React from 'react'
import AppContent from './components/app-content'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      userInfo: null,
      repos: [],
      starred: []
    }
    this.handleSearch = this.handleSearch.bind(this)
  }

  async handleSearch (e) {
    const keyCode = e.which || e.keyCode
    const enter = 13
    const value = e.target.value
    const baseURL = 'https://api.github.com/users/'

    if (keyCode !== enter) {
      return
    }

    try {
      const userData = await (await fetch(`${baseURL}${value}`)).json()

      if (!userData.login) {
        throw new Error('Usuário não encontrado')
      }

      const [ repos, starreds ] = await Promise.all([
        (await (fetch(`https://api.github.com/users/${userData.login}/repos`))).json(),
        ((await fetch(`https://api.github.com/users/${userData.login}/starred`)).json())
      ])

      const newUserInfo = {
        login: userData.login,
        name: userData.name,
        photo: userData.avatar_url,
        link: userData.html_url,
        repos: userData.public_repos,
        following: userData.following,
        followers: userData.followers
      }

      const newRepos = repos.map(repo => ({ 
        id: repo.id,
        link: repo.html_url,
        name: repo.name 
      }))
      
      const newStarreds = starreds.map(starred => ({ 
        id: starred.id,
        link: starred.html_url,
        name: starred.name 
      }))

      this.setState({ 
        userInfo: newUserInfo,
        repos: newRepos,
        starred: newStarreds
      })

    } catch (error) {
      console.log(error)
      this.setState({ 
        userInfo: null,
        repos: [],
        starred: []
      })
    }
  }

  render () {
    return (
      <AppContent 
        userInfo={this.state.userInfo}
        repos={this.state.repos}
        starred={this.state.starred}
        handleSearch={this.handleSearch}
      />
    )
  }
}

export default App
