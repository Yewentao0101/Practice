import React, { Component } from 'react'
import Search from './component/Search/Search'
import List from './component/List/List'

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Search />
        <List />
      </div>
    )
  }
}


