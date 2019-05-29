import React from 'react';
import FeatureItem from './FeatureItem/FeatureItem';

function FeatureList (props) {
  return <div className="feature">
      <div className="feature__name">{props.name}</div>
      <ul className="feature__list">
        { props.features[props.name].map((item, index) => 
          <FeatureItem
            key={index}
            option={props.name}
            item={item}
            state={props.state}
          />
        ) }
      </ul>
    </div>
}

export default FeatureList;