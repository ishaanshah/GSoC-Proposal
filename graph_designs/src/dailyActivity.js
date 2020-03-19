import React from 'react'
import { ResponsiveLine } from '@nivo/line'

export default class dailyActivity extends React.Component {
  render() {
    return (
      <ResponsiveLine
        data={this.props.data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{ type: 'linear', stacked: true}}
        axisBottom={{
          orient: 'bottom',
          tickSize: 5,
          tickPadding: 5,
          legend: 'Hour',
          legendOffset: 36,
          legendPosition: 'middle'
        }}
        axisLeft={null}
        enableCrosshair={false}
        curve='monotoneX'
        colors="#EB743B"
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabel="y"
        pointLabelYOffset={-12}
        useMesh={true}
        layers={['axes', 'crosshair', 'lines', 'points', 'mesh']}
      />
    )

  }}
