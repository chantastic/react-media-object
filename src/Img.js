import React, { PropTypes } from 'react';
import styleResolver from './utils/styleResolver.js';

const styles = {
  standard: {
    float: 'left',
    marginRight: 10
  },
  reverse: {
    float: 'right',
    marginLeft: 10
  }
};

function baseStyle (context) {
  return context.reverse ? styles.reverse : styles.standard;
}

const Img = (props, context) => (
  <a {...props} style={styleResolver(baseStyle(context), props, context)} />
);

Img.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  style: PropTypes.object
};

Img.contextTypes = {
  reverse: PropTypes.bool
};

export default Img;
