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
  get style () {
    return Object.assign(
      {},
      mediaStyles.root,
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
  style: PropTypes.object
};

class Img extends Component {
  get style () {
    return Object.assign(
      {},
      mediaStyles.img,
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
  style: PropTypes.object
};

class ImgExt extends Component {
  get style () {
    return Object.assign(
      {},
      mediaStyles.imgExt,
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

class Bd extends Component {
  render () {
    return <div className="bd" style={mediaStyles.bd} {...this.props} />;
  }
}

Bd.propTypes = {
  children: PropTypes.node
};

export { Media, Img, ImgExt, Bd };
