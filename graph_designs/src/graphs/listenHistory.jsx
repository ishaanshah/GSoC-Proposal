import React from 'react';
import Line from '../components/line';

let data = [
  {
    data: [
      {
        x: 'Monday',
        y: 69
      },
      {
        x: 'Tuesday',
        y: 78
      },
      {
        x: 'Wednesday',
        y: 64
      },
      {
        x: 'Thursday',
        y: 39
      },
      {
        x: 'Friday',
        y: 47
      },
      {
        x: 'Saturday',
        y: 31
      },
      {
        x: 'Sunday',
        y: 56
      }
    ]
  }
];

export default class TopArtist extends React.Component {
  render() {
    return (
      <div>
        <div className="graph">
          <Line data={data} xLabel="Day" />
        </div>
        <h3>Listen Activity</h3>
      </div>
    );
  }
}
