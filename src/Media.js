import React, { Component, PropTypes } from 'react';

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
  getChildContext () {
    return { reverse: this.props.reverse };
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
      <div className="media" {...this.props} style={this.style}>
        <div style={clearfixStyles[':before']} />
        {this.props.children}
        <div style={clearfixStyles[':after']} />
      </div>
    );
  }
}

Media.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
  style: PropTypes.object
};

Media.childContextTypes = {
  reverse: PropTypes.bool
};

export default Media;
