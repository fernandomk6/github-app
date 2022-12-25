import './style.css'

import React from 'react'
import AppContent from './components/app-content'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      userInfo: null,
      repos: [],
      starred: [],
      isFetching: false
    }
    this.handleSearch = this.handleSearch.bind(this)
    this.handleShowRepos = this.handleShowRepos.bind(this)
  }

  getGitHubApiUrl (username, type) {
    const internalType = type ? `/${type}` : ''
    return `https://api.github.com/users/${username}${internalType}`
  }

  async handleSearch (e) {
    const keyCode = e.which || e.keyCode
    const enter = 13
    const value = e.target.value

    if (keyCode !== enter) {
      return
    }

    this.setState({ isFetching: true })
    try {
      const url = this.getGitHubApiUrl(value)
      const userData = await (await fetch(url)).json()

      if (!userData.login) {
        throw new Error('Usuário não encontrado')
      }

      const userInfo = {
        login: userData.login,
        name: userData.name,
        photo: userData.avatar_url,
        link: userData.html_url,
        repos: userData.public_repos,
        following: userData.following,
        followers: userData.followers
      }

      this.setState({ userInfo, repos: [], starred: [] })
    } catch (error) {
      console.log(error)

      this.setState({ 
        userInfo: null,
        repos: [],
        starred: []
      })
    }

    this.setState({ isFetching: false })
  }

  handleShowRepos (type) {
    return async () => {
      const login = this.state.userInfo.login
      const url = this.getGitHubApiUrl(login, type)
      const repos = await (await (fetch(url))).json()
  
      this.setState({ 
        [type]: repos.map(repo => ({
          id: repo.id,
          link: repo.html_url,
          name: repo.name
        })), 
        [type === 'starred' ? 'repos' : 'starred']: [] 
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
        handleShowRepos={this.handleShowRepos('repos')}
        handleShowStarred={this.handleShowRepos('starred')}
        isFetching={this.state.isFetching}
      />
    )
  }
}

export default App
