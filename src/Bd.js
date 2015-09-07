import React, { Component, PropTypes } from 'react';
import styleResolver from './utils/styleResolver';

const styles = {
  display: 'table-cell',
  verticalAlign: 'top',
  width: '10000px !important'
};

export default class Bd extends Component {
  render () {
    return (
      <div
       {...this.props}
       style={styleResolver(styles, this.props)}
      />
    );
  }
}

Bd.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object
};
