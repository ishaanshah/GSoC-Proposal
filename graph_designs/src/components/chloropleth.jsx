import React from 'react';
import features from './world_countries.json';
import { ResponsiveChoropleth } from '@nivo/geo';

export default class Chloropleth extends React.Component {
  render() {
    return (
      <ResponsiveChoropleth
        data={this.props.data}
        features={features.features}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        colors="oranges"
        domain={[0, 100]}
        unknownColor="#ffffff"
        label="properties.name"
        valueFormat=".2s"
        projectionTranslation={[0.5, 0.5]}
        projectionRotation={[0, 0, 0]}
        enableGraticule={true}
        graticuleLineColor="#dddddd"
        borderWidth={0.5}
        borderColor="#152538"
        legends={[
          {
            anchor: 'bottom-left',
            direction: 'column',
            justify: true,
            translateX: 20,
            translateY: -100,
            itemsSpacing: 0,
            itemWidth: 94,
            itemHeight: 18,
            itemDirection: 'left-to-right',
            itemTextColor: '#444444',
            itemOpacity: 0.85,
            symbolSize: 18,
            effects: [
              {
                on: 'hover',
                style: {
                  itemTextColor: '#000000',
                  itemOpacity: 1
                }
              }
            ]
          }
        ]}
      />
    );
  }
}
