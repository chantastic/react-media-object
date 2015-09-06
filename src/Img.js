import React, { Component, PropTypes } from 'react';

const styles = {
  float: 'left',
  marginRight: 10
};

class Img extends Component {
  get style () {
    return Object.assign(
      {},
      styles,
      this.props.style
    );
  }

  render () {
    return <a {...this.props} style={this.style} />;
  }
}

Img.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  style: PropTypes.object
};

export default Img;
