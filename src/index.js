import ReactDOM from 'react-dom/client';
import React, { useState } from 'react';
import Spotify from 'spotify-web-api-js';
import Login from './Components/Login';
import Question1 from './Components/Question1';

const App = () => {
  const [state, setState] = useState('start');
  const [spotifyAPI, setSpotifyAPI] = useState(new Spotify());

  // Change the state to switch the shown component
  const changeState = (newState) => {
    setState(newState);
  };

  return (
    <div>
      {state === 'start' && (
        <Login changeState={changeState} spotify={spotifyAPI} />
      )}

      {state === 'begin' && (
        <Question1 changeState={changeState} spotify={spotifyAPI} />
      )}
    </div>
  );
};

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);
