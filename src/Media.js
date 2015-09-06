import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

const clearfixStyles = {
  ':before': {
    display: 'table'
  },
  ':after': {
    display: 'table',
    clear: 'both'
  }
};

const styles = {
  marginTop: '1.5em',
  marginBottom: '1.5em'
};

class Media extends Component {
  get className () {
    return classnames(
      'media',
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

  render() {
    return (
      <div {...this.props} className={this.className} style={this.style}>
        <div style={clearfixStyles[':before']} />
        {this.props.children}
        <div style={clearfixStyles[':after']} />
      </div>
    );
  }
}

Media.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object
};

export default Media;
