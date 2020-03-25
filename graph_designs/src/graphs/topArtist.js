import React from 'react'
import Stream from '../graph_components/stream'

let data = [
  {
    "Artist 1": 93,
    "Artist 2": 150,
    "Artist 3": 141,
    "Artist 4": 68,
    "Artist 5": 114,
    "Artist 6": 122,
    "Artist 7": 122,
    "Artist 8": 122,
    "Artist 9": 122
  },
  {
    "Artist 1": 106,
    "Artist 2": 78,
    "Artist 3": 20,
    "Artist 4": 150,
    "Artist 5": 38,
    "Artist 6": 109,
    "Artist 7": 122,
    "Artist 8": 122,
    "Artist 9": 122
  },
  {
    "Artist 1": 24,
    "Artist 2": 184,
    "Artist 3": 22,
    "Artist 4": 108,
    "Artist 5": 24,
    "Artist 6": 27,
    "Artist 7": 122,
    "Artist 8": 122,
    "Artist 9": 122
  },
  {
    "Artist 1": 82,
    "Artist 2": 173,
    "Artist 3": 96,
    "Artist 4": 198,
    "Artist 5": 14,
    "Artist 6": 93,
    "Artist 7": 122,
    "Artist 8": 122,
    "Artist 9": 122
  },
  {
    "Artist 1": 115,
    "Artist 2": 72,
    "Artist 3": 11,
    "Artist 4": 159,
    "Artist 5": 52,
    "Artist 6": 121,
    "Artist 7": 122,
    "Artist 8": 122,
    "Artist 9": 122
  },
  {
    "Artist 1": 60,
    "Artist 2": 186,
    "Artist 3": 139,
    "Artist 4": 48,
    "Artist 5": 12,
    "Artist 6": 121,
    "Artist 7": 122,
    "Artist 8": 122,
    "Artist 9": 122
  },
  {
    "Artist 1": 50,
    "Artist 2": 193,
    "Artist 3": 55,
    "Artist 4": 25,
    "Artist 5": 150,
    "Artist 6": 67,
    "Artist 7": 122,
    "Artist 8": 122,
    "Artist 9": 122
  },
  {
    "Artist 1": 198,
    "Artist 2": 10,
    "Artist 3": 81,
    "Artist 4": 85,
    "Artist 5": 156,
    "Artist 6": 46,
    "Artist 7": 122,
    "Artist 8": 122,
    "Artist 9": 122
  },
]

export default class TopArtist extends React.Component {
  render() {
    return (
      <div className='graph'>
        <Stream
          data={data}
          xLabel='Day'
        />
      </div>
    )
  }
}
