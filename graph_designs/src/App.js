import React from 'react';
import './App.css';
import TopArtist from './topArtist'

const data = [
  {
    "artist": "The Lumineers",
    "Listen Count": 8,
  },
  {
    "artist": "American Authors",
    "Listen Count": 8,
  },
  {
    "artist": "Within Temptation",
    "Listen Count": 9,
  },
  {
    "artist": "The Weeknd",
    "Listen Count": 17,
  },
  {
    "artist": "Imagine Dragons",
    "Listen Count": 38,
  },
  {
    "artist": "Maroon 5",
    "Listen Count": 45,
  },
  {
    "artist": "Ellie Goulding",
    "Listen Count": 56,
  },
  {
    "artist": "The Local Train",
    "Listen Count": 88,
  },
  {
    "artist": "Lenka",
    "Listen Count": 88,
  },
  {
    "artist": "Coldplay",
    "Listen Count": 91,
  }
]

function App() {
  return (
    <div id="graph">
      <TopArtist data={data} />
    </div>
  );
}

export default App;
