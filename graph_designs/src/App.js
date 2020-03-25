import React from 'react';
import ListenHistory from './graphs/listenHistory';
import DailyActivity from './graphs/dailyActivity';
import TopGenres from './graphs/topGenres';
import ArtistOrigin from './graphs/artistOrigin';
import TopArtist from './graphs/topArtist';
import './styles.css';

export default function App() {
  return (
    <div className="App">
      <ListenHistory />
      <DailyActivity />
      <TopGenres />
      <ArtistOrigin />
      <TopArtist />
    </div>
  );
}
