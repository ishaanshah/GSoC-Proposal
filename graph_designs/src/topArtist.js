import React from 'react'
import { ResponsiveBar } from '@nivo/bar'
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

export default class TopArtist extends React.Component {
  theme = {
    labels: {
      text: {
        fontSize: '16px',
      },
    },
  }

  render() {
    return (
      <ResponsiveBar
        data={this.props.data}
        keys={[ 'Listen Count' ]}
        indexBy='artist'
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        layout='horizontal'
        padding={0.3}
        colors="#EB743B"
        axisLeft={null}
        axisBottom={null}
        enableGridY={false}
        labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
        labelFormat={v => <tspan x={25}>{v}</tspan>}
        theme={this.theme}
      />
    )
  }
}
