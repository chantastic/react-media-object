import React, { PropTypes } from 'react';
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

const Media = (props) => (
  <div {...props} style={styleResolver(styles, props)} >
    <div style={clearfixStyles[':before']} />
    {props.children}
    <div style={clearfixStyles[':after']} />
  </div>
);

export default Media;

Media.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object
};
