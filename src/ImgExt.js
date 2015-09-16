import React, { PropTypes } from 'react';
import styleResolver from './utils/styleResolver';

const styles = { display: 'block' };

const ImgExt = props => (
  <img {...props} style={styleResolver(styles, props)} />
);

ImgExt.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  style: PropTypes.object
};

export default ImgExt;
