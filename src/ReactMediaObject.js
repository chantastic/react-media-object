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

const mediaStyles = {
  root: {
    marginTop: '1.5em',
    marginBottom: '1.5em'
  },
  img: {
    float: 'left',
    marginRight: 10
  },
  imgExt: {
    display: 'block'
  },
  bd: {
    display: 'table-cell',
    verticalAlign: 'top',
    width: '10000px !important'
  }
};

class Media extends Component {
  render() {
    return (
      <div className="media" style={mediaStyles.root} {...this.props}>
        <div style={clearfixStyles[':before']} />
        {this.props.children}
        <div style={clearfixStyles[':after']} />
      </div>
    );
  }
}

Media.propTypes = {
  children: PropTypes.node.isRequired
};

class MediaImg extends Component {
  render () {
    return <a className="img" style={mediaStyles.img} {...this.props} />;
  }
}

MediaImg.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired
};

class MediaImgExt extends Component {
  render () {
    return <img style={mediaStyles.imgExt} {...this.props} />;
  }
}

MediaImgExt.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired
};

class MediaBd extends Component {
  render () {
    return <div className="bd" style={mediaStyles.bd} {...this.props} />;
  }
}

MediaBd.propTypes = {
  children: PropTypes.node
};

export { Media, MediaImg, MediaImgExt, MediaBd };
