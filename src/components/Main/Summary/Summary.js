import React from 'react';
import SummaryOptions from './SummaryOptions/SummaryOptions';

function Summary (props) {
  return Object.keys(props.selected).map(key =>
    <SummaryOptions
      key={key}
      selected={props.selected}
      summaryOption={key}
    />);
}

export default Summary;