import React, {Component} from 'react';
import {SearchBar} from '../SearchBar/SearchBar'
import {SearchResults} from '../SearchResults/SearchResults'
import {Playlist} from '../Playlist/Playlist'

import './App.css';

class App extends Component{
  render(){

    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            {/* <!-- Add a SearchResults component -->} */}
            <SearchResults />
            {/* <!-- Add a Playlist component --> */}
            <Playlist />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
