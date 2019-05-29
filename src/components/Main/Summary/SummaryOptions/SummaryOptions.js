import React from 'react';

function SummaryOptions (props) {
  return  <div className="summary__option">
  <div className="summary__option__label">{props.summaryOption}  </div>
  <div className="summary__option__value">{props.selected[props.summaryOption].name}</div>
  <div className="summary__option__cost">
    { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
        .format(props.selected[props.summaryOption].cost) }
  </div>
</div>
}

export default SummaryOptions;