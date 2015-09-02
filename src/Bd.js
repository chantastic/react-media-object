import React, { Component, PropTypes } from 'react';

const styles = {
  display: 'table-cell',
  verticalAlign: 'top',
  width: '10000px !important'
};

class Bd extends Component {
  get style () {
    return Object.assign(
      {},
      styles,
      this.props.style
    );
  }

  render () {
    return <div className="bd" {...this.props} style={this.style} />;
  }
}

Bd.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object
};

export default Bd;
