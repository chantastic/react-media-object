import React, { PropTypes } from 'react';
import styleResolver from './utils/styleResolver.js';

const styles = {
  float: 'left',
  marginRight: 10
};

const Img = (props) => (
  <a {...props} style={styleResolver(styles, props)} />
);

export default Img;

Img.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  style: PropTypes.object
};
