import React from 'react';
import Features from './Features/Features';
import Summary from './Summary/Summary';
import Total from './Total/Total';

function Main (props) {
  return (
    <main>
    <section className="main__form">
      <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
      <Features
        features={props.features} 
        selected={props.selected}
      />
    </section>
    <section className="main__summary">
      <h3>NEW GREENLEAF 2018</h3>
      <Summary
        selected={props.selected}
      />
    <div className="summary__total">
        <div className="summary__total__label">Your Price: </div>
        <div className="summary__total__value">
        <Total
          selected={props.selected}
        />
        </div>
      </div>
    </section>
  </main>
  );
}

export default Main;