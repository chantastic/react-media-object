import React, { Component, PropTypes } from 'react';

function styles (reversed) {
  return (reversed)
    ? { float: 'right', marginLeft: 10 }
    : { float: 'left', marginRight: 10 };
}

class Img extends Component {
  get style () {
    return Object.assign(
      {},
      styles(this.props.reverse),
      this.props.style
    );
  }

  render () {
    return <a className="img" {...this.props} style={this.style} />;
  }
}

Img.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  reverse: PropTypes.bool,
  style: PropTypes.object
};

export default Img;
