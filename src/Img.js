import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

const styles = {
  float: 'left',
  marginRight: 10
};

class Img extends Component {
  get className () {
    return classnames(
      'img',
      this.props.className
    );
  }

  get style () {
    return Object.assign(
      {},
      styles,
      this.props.style
    );
  }

  render () {
    return <a {...this.props} className={this.className} style={this.style} />;
  }
}

Img.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
  style: PropTypes.object
};

export default Img;
