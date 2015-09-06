import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

const styles = {
  display: 'table-cell',
  verticalAlign: 'top',
  width: '10000px !important'
};

class Bd extends Component {
  get className () {
    return classnames(
      'bd',
      this.props.className
    );
  }

  get style () {
    return Object.assign(
      {},
      styles,
      this.props.style
    );
  }

  render () {
    return <div {...this.props} className={this.className} style={this.style} />;
  }
}

Bd.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object
};

export default Bd;
