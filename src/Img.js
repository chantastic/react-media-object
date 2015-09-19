import React, { Component, PropTypes } from 'react';
import styleResolver from './utils/styleResolver.js';

const styles = {
  float: 'left',
  marginRight: 10
};

export default class Img extends Component {
  render () {
    return (
      <a
       {...this.props}
       style={styleResolver(styles, this.props)}
      />
    );
  }
}

Img.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  style: PropTypes.object
};
