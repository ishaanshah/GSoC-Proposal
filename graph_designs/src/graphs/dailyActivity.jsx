import React from 'react';
import Line from '../components/line';

let data = [
  {
    data: [
      {
        x: '0',
        y: 12
      },
      {
        x: '1',
        y: 5
      },
      {
        x: '2',
        y: 3
      },
      {
        x: '3',
        y: 5
      },
      {
        x: '4',
        y: 0
      },
      {
        x: '5',
        y: 0
      },
      {
        x: '6',
        y: 3
      },
      {
        x: '7',
        y: 8
      },
      {
        x: '8',
        y: 7
      },
      {
        x: '9',
        y: 10
      },
      {
        x: '10',
        y: 15
      },
      {
        x: '11',
        y: 18
      },
      {
        x: '12',
        y: 20
      },
      {
        x: '13',
        y: 27
      },
      {
        x: '14',
        y: 27
      },
      {
        x: '15',
        y: 29
      },
      {
        x: '16',
        y: 35
      },
      {
        x: '17',
        y: 38
      },
      {
        x: '18',
        y: 35
      },
      {
        x: '19',
        y: 28
      },
      {
        x: '20',
        y: 25
      },
      {
        x: '21',
        y: 18
      },
      {
        x: '22',
        y: 21
      },
      {
        x: '23',
        y: 8
      }
    ]
  }
];

export default class DailyActivity extends React.Component {
  render() {
    return (
      <div>
        <div className="graph">
          <Line data={data} xLabel="Hour" />
        </div>
        <h3>Daily Activity</h3>
      </div>
    );
  }
}
