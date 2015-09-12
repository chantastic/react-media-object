import React, { Component, PropTypes } from 'react';
import styleResolver from './utils/styleResolver.js';

const clearfixStyles = {
  ':before': {
    display: 'table'
  },
  ':after': {
    display: 'table',
    clear: 'both'
  }
};

const styles = null;

export default class Media extends Component {
  render() {
    return (
      <div
       {...this.props}
       style={styleResolver(styles, this.props)}
      >
        <div style={clearfixStyles[':before']} />
        {this.props.children}
        <div style={clearfixStyles[':after']} />
      </div>
    );
  }
}

Media.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object
};
