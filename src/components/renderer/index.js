import React from 'react';
import * as vega from 'vega';
import 'vega-tooltip/build/vega-tooltip.css';
import * as vegaTooltip from 'vega-tooltip';

export default class Renderer extends React.Component {

  renderVega(props) {
    this.refs.chart.style.width = this.refs.chart.getBoundingClientRect().width + 'px';
    let runtime;
    let view;
    try {
      runtime = vega.parse(props.spec);
      view = new vega.View(runtime)
      .logLevel(vega.Warn)
      .initialize(this.refs.chart)
      .renderer('svg')
      .hover()
      .run();
    } catch (err) {
      window.alert(err);
      throw err;
    }
    this.refs.chart.style.width = 'auto';
  }

  componentDidMount() {
    this.renderVega(this.props);
  }

  componentDidUpdate() {
    this.renderVega(this.props);
  }

  renderChart() {
    return (
      <div className='chart-container'>
        <div className='chart'>
          <div ref='chart'>
          </div>
          {this.props.tooltip ? <div id='vis-tooltip' className='vg-tooltip'></div> : null}
        </div>
      </div>
    );
  }

  render() {
    return this.renderChart();
  }
}
