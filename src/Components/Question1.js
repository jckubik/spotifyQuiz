import Spotify from 'spotify-web-api-js';

const Question1 = ({ changeState, spotify }) => {
  const topTenArtists = spotify
    .getMyTopArtists({ limit: 10 })
    .then((result) => result);

  console.log(topTenArtists);

  return (
    <div>
      <p>Do you know your top 5 favorite artists?</p>
    </div>
  );
};

export default Question1;
