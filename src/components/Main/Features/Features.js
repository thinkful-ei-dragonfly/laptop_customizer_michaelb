import React from 'react';
import FeatureList from './FeatureList/FeatureList';

function Features (props) {
  return Object.keys(props.features)
    .map(key => {
      return <FeatureList
                key={key}
                name={key}
                features={props.features}
                state={props.state}
              />
    });
}

export default Features;