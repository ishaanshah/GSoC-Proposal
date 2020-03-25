import React from 'react';
import Pie from '../components/pie';

let data = [
  {
    id: 'electro',
    label: 'electro',
    value: 4
  },
  {
    id: 'dance',
    label: 'dance',
    value: 7
  },
  {
    id: 'alternative',
    label: 'alternative',
    value: 12
  },
  {
    id: 'pop',
    label: 'pop',
    value: 32
  },
  {
    id: 'rock',
    label: 'rock',
    value: 45
  }
];

export default class TopGenres extends React.Component {
  render() {
    return (
      <div>
        <div className="graph">
          <Pie data={data} />
        </div>
        <h3>Top Genres</h3>
      </div>
    );
  }
}
