import React, {Component} from 'react';
import {SearchBar} from '../SearchBar/SearchBar'
import {SearchResults} from '../SearchResults/SearchResults'
import {Playlist} from '../Playlist/Playlist'

import './App.css';

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      SearchResults: [
          {
          id: 1,
          name: 'Chris and the weeds',
          artist: 'Chris W',
          album: 'The world is mine'
        }],
      playlistName: 'First',
      playlistTracks:[{
        id: 2,
        name: 'Eliza butt',
        artist: 'Eliza T',
        album: 'It\'s my world'
      }]
    }
  }

  addTrack = (track) =>{
    if(this.state.playlistTracks.id.find(prevTrack=> prevTrack.id !== track.id))
      {
        console.log('same')
        this.setState({
          playlistTracks: track
      })
    }
  }

  render(){

    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults
              searchResults={this.state.SearchResults}
              onAdd={this.addTrack}
            />
            <Playlist 
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
