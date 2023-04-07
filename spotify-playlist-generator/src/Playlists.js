import { useState, useEffect } from 'react';
import { UseSpotifyToken } from './UseSpotifyToken';
import axios from 'axios';

export default function Playlists() {
  const [token, fetchProfile, logout] = UseSpotifyToken();
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const profile = await fetchProfile(token);
      console.log(profile)
      const response = await axios(`https://api.spotify.com/v1/users/${profile.id}/playlists`, {
        method: "GET", headers: { Authorization: `Bearer ${token}` }
      });
      setPlaylists(response.data.items);
    }

    if (token) {
      fetchData();
    }
  }, [token]);

    return (
      <div>
        <h1>My Playlists</h1>
        <ul>
          {playlists.map(playlist => (
            <ul key={playlist.id}>{playlist.name}</ul>
          ))}
        </ul>
      </div>
    );
  }