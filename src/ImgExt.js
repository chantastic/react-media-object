import React, { Component, PropTypes } from 'react';

const styles = {
  display: 'block'
};

class ImgExt extends Component {
  get style () {
    return Object.assign(
      {},
      styles,
      this.props.style
    );
  }

  render () {
    return <img {...this.props} style={this.style} />;
  }
}

ImgExt.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  style: PropTypes.object
};

export default ImgExt;
