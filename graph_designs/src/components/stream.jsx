import React from 'react';
import { ResponsiveStream } from '@nivo/stream';

export default class Stream extends React.Component {
  render() {
    return (
      <ResponsiveStream
        data={this.props.data}
        keys={['Artist 1', 'Artist 2', 'Artist 3', 'Artist 4', 'Artist 5']}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        axisBottom={{
          orient: 'bottom',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: this.props.xLabel,
          legendOffset: 36,
          legendPosition: 'middle'
        }}
        axisLeft={null}
        offsetType="silhouette"
        colors={{ scheme: 'oranges' }}
      />
    );
  }
}
