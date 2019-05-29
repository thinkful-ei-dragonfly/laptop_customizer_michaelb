import React from 'react';

function FeatureItem (props) {
  const selectedClass = props.item.name === props.state.selected[props.option].name ? 'feature__selected' : '';
  const featureClass = 'feature__option ' + selectedClass;

  return <li className="feature__item">
    <div className={featureClass}
      onClick={e => props.state.updateFeature(props.option, props.item)}>
        { props.item.name }
        ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
          .format(props.item.cost) })
    </div>
  </li>
}

export default FeatureItem;