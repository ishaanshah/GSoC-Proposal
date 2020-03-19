import React from 'react';
import './App.css';
import DailyActivity from './dailyActivity'

const data = [{
  "data": [
  {
    "x": "0",
    "y": 10,
  },
  {
    "x": "1",
    "y": 4,
  },
  {
    "x": "2",
    "y": 0,
  },
  {
    "x": "3",
    "y": 0,
  },
  {
    "x": "4",
    "y": 0,
  },
  {
    "x": "5",
    "y": 0,
  },
  {
    "x": "6",
    "y": 0,
  },
  {
    "x": "7",
    "y": 5,
  },
  {
    "x": "8",
    "y": 4,
  },
  {
    "x": "9",
    "y": 8,
  },
  {
    "x": "10",
    "y": 4,
  },
  {
    "x": "11",
    "y": 12,
  },
  {
    "x": "12",
    "y": 9,
  },
  {
    "x": "13",
    "y": 15,
  },
  {
    "x": "14",
    "y": 20,
  },
  {
    "x": "15",
    "y": 5,
  },
  {
    "x": "16",
    "y": 13,
  },
  {
    "x": "17",
    "y": 11,
  },
  {
    "x": "18",
    "y": 10,
  },
  {
    "x": "19",
    "y": 23,
  },
  {
    "x": "20",
    "y": 20,
  },
  {
    "x": "21",
    "y": 19,
  },
  {
    "x": "22",
    "y": 20,
  },
  {
    "x": "23",
    "y": 15,
  },

]}]

function App() {
  return (
    <div id="graph">
      <DailyActivity data={data} />
    </div>
  );
}

export default App;
