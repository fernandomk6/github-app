import './style.css'

import React from 'react'
import AppContent from './components/app-content'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      userInfo: null,
      repos: [],
      starrred: []
    }
    this.handleSearch = this.handleSearch.bind(this)
  }

  handleSearch (e) {
    const keyCode = e.which || e.keyCode
    const enter = 13
    const value = e.target.value
    const baseURL = 'https://api.github.com/users/'

    if (keyCode !== enter) {
      return
    }

    fetch(`${baseURL}${value}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Usuario não encontrado')
        }

        return response.json()
      })
      .then((data) => {
        this.setState({ userInfo: {
          name: data.name,
          photo: data.avatar_url,
          link: data.html_url,
          repos: data.public_repos,
          following: data.following,
          followers: data.followers
        }})
      })
      .catch((error) => console.log(error))
  }

  render () {
    return (
      <AppContent 
        userInfo={this.state.userInfo}
        repos={this.state.repos}
        starred={this.state.starrred}
        handleSearch={this.handleSearch}
      />
    )
  }
}

export default App
