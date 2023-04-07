import './App.css';
import Login from './Login.js'
import Playlists from './Playlists';

import {useEffect, useState} from 'react';
import axios from 'axios';
import Weather from './Weather';


function App() {
  

  return (
    <div className="App">
      <header className="App-header">
        <h1>Spotify Playlist Generator</h1>
        <Login />
        <Playlists />
        <Weather />
      </header>
    </div>
  );
}

export default App;
