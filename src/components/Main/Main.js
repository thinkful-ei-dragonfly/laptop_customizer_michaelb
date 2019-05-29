import React, { Component } from 'react';
import Features from './Features/Features';
import Summary from './Summary/Summary';
import Total from './Total/Total';

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      selected: {
        Processor: {
            name: '17th Generation Intel Core HB (7 Core with donut spare)',
            cost: 700
          },
        "Operating System": {
            name: 'Ubuntu Linux 16.04',
            cost: 200
          },
        "Video Card":{
            name: 'Toyota Corolla 1.5v',
            cost: 1150.98
          },
        Display: {
            name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
            cost: 1500
          }
      },
      updateFeature: function (feature, newValue) {
        const selected = Object.assign({}, this.state.selected);
        selected[feature] = newValue;
        this.setState({
          selected
        });
      }
    }
    this.state.updateFeature = this.state.updateFeature.bind(this);
  }

  render() {
    return (
      <main>
      <section className="main__form">
        <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
        <Features
          features={this.props.features}
          state={this.state}
        />
      </section>
      <section className="main__summary">
        <h3>NEW GREENLEAF 2018</h3>
        <Summary
          selected={this.state.selected}
        />
      <div className="summary__total">
          <div className="summary__total__label">Your Price: </div>
          <div className="summary__total__value">
          <Total
            selected={this.state.selected}
          />
          </div>
        </div>
      </section>
    </main>
    );
  }
}

export default Main;