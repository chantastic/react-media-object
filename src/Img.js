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
      styles(this.context.reverse),
      this.props.style
    );
  }

  render () {
    console.log(this.context);
    return <a className="img" {...this.props} style={this.style} />;
  }
}

Img.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  style: PropTypes.object
};

Img.contextTypes = {
  reverse: PropTypes.bool
};

export default Img;
