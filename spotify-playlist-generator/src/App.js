import './App.css';
import Login from './Login.js'
import {useEffect, useState} from 'react';

function App() {
  const CLIENT_ID = "e687e857785e45aaa016ecbbb7f49ba0"
  const REDIRECT_URI = "http://localhost:3000"
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
  const RESPONSE_TYPE = "token"
  const [token, setToken] = useState("")

  useEffect(() => {
    const hash = window.location.hash
    let token = window.localStorage.getItem("token")

    if (!token && hash) {
        token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

        window.location.hash = ""
        window.localStorage.setItem("token", token)
    }

    setToken(token)

}, [])

  const logout = () => {
    setToken("")
    window.localStorage.removeItem("token")
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>Spotify Playlist Generator</p>
        <Login />
      </header>
    </div>
  );
}

export default App;
