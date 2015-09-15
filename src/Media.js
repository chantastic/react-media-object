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
  getChildContext () {
    return { reverse: this.props.reverse };
  }

  render () {
    return (
      <div {...this.props} style={styleResolver(styles, this.props)} >
        <div style={clearfixStyles[':before']} />
        {this.props.children}
        <div style={clearfixStyles[':after']} />
      </div>
    );
  }
}

Media.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
  style: PropTypes.object
};

Media.childContextTypes = {
  reverse: PropTypes.bool
};

export default Media;
