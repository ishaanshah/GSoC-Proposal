import React from 'react';
import Chloropleth from '../components/chloropleth';

let data = [
  {
    id: 'USA',
    value: 44
  },
  {
    id: 'CAN',
    value: 4
  },
  {
    id: 'COL',
    value: 2
  },
  {
    id: 'FRA',
    value: 2
  },
  {
    id: 'GBR',
    value: 22
  },
  {
    id: 'IRL',
    value: 3
  },
  {
    id: 'BEL',
    value: 1
  },
  {
    id: 'DEU',
    value: 1
  },
  {
    id: 'NLD',
    value: 1
  },
  {
    id: 'NOR',
    value: 1
  },
  {
    id: 'SWE',
    value: 2
  },
  {
    id: 'TUR',
    value: 1
  },
  {
    id: 'PAK',
    value: 1
  },
  {
    id: 'IND',
    value: 33
  },
  {
    id: 'IDN',
    value: 3
  },
  {
    id: 'TUR',
    value: 1
  },
  {
    id: 'AUS',
    value: 4
  }
];

export default class DailyActivity extends React.Component {
  render() {
    return (
      <div>
        <div className="graph">
          <Chloropleth data={data} />
        </div>
        <h3>Artist Origin</h3>
      </div>
    );
  }
}
