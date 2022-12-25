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
    this.handleShowRepos = this.handleShowRepos.bind(this)
    this.handleShowStarred = this.handleShowStarred.bind(this)
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
  }
  async handleShowRepos () {
    const login = this.state.userInfo.login
    const repos = await (await (fetch(`https://api.github.com/users/${login}/repos`))).json()
    const newRepos = repos.map(repo => ({
      id: repo.id,
      link: repo.html_url,
      name: repo.name
    }))

    this.setState({ repos: newRepos, starred: [] })
  }

  async handleShowStarred () {
    const login = this.state.userInfo.login
    const starred = await (await (fetch(`https://api.github.com/users/${login}/starred`))).json()
    const newStarred = starred.map(starred => ({
      id: starred.id,
      link: starred.html_url,
      name: starred.name
    }))

    this.setState({ starred: newStarred, repos: [] })
  }
  
  render () {
    return (
      <AppContent 
        userInfo={this.state.userInfo}
        repos={this.state.repos}
        starred={this.state.starred}
        handleSearch={this.handleSearch}
        handleShowRepos={this.handleShowRepos}
        handleShowStarred={this.handleShowStarred}
      />
    )
  }
}

export default App
