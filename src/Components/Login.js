import React, { useEffect, useState } from 'react';
import Spotify from 'spotify-web-api-js';

const Login = ({ changeState, spotify }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState();

  // Parses the querystring
  function getHashParams() {
    const hashParams = {};
    let e;
    const r = /([^&;=]+)=?([^&;]*)/g;
    const q = window.location.hash.substring(1);
    while ((e = r.exec(q))) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }

    // If an access token was returned, set it to be used
    if (hashParams.access_token) {
      spotify.setAccessToken(hashParams.access_token);
      setLoggedIn(true);
    }

    return hashParams;
  }

  // Grab the user that logged in
  const grabUser = () => {
    spotify.getMe().then((result) => setUser(result));
  };

  useEffect(() => {
    getHashParams();

    if (loggedIn) {
      grabUser();
    }
  });

  return (
    <div className="App">
      <div>
        {!loggedIn ? (
          <a href="http://localhost:8888/">
            <button type="button">Login with Spotify</button>
          </a>
        ) : (
          ''
        )}
        {user ? <h2>{`Hey there, ${user.display_name}!`}</h2> : ''}
      </div>

      <div>
        <button type="button" onClick={() => changeState('begin')}>
          Start Quiz
        </button>
      </div>
    </div>
  );
};

export default Login;
