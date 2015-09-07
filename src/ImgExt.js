import React, { Component, PropTypes } from 'react';
import styleResolver from './utils/styleResolver';

const styles = { display: 'block' };

export default class ImgExt extends Component {
  get style () {
    return Object.assign(
      {},
      styles,
      this.props.style
    );
  }

  render () {
    return (
      <img
       {...this.props}
       style={styleResolver(styles, this.props)}
      />
    );
  }
}

ImgExt.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  style: PropTypes.object
};
