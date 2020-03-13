import React from 'react';
import './App.css';
import ListenHistory from './listenHistory'

const data = [
  {
    "id": "japan",
    "color": "hsl(199, 70%, 50%)",
    "data": [
      {
        "x": "Monday",
        "y": 150
      },
      {
        "x": "Tuesday",
        "y": 79
      },
      {
        "x": "Wednesday",
        "y": 90 
      },
      {
        "x": "Thursday",
        "y": 120
      },
      {
        "x": "Friday",
        "y": 90
      },
      {
        "x": "Saturday",
        "y": 130
      },
      {
        "x": "Sunday",
        "y": 72
      },
    ]
  },
]

function App() {
  return (
    <div id="graph">
      <ListenHistory data={data} />
    </div>
  );
}

export default App;
