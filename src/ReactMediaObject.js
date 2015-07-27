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

class Img extends Component {
  render () {
    return <a className="img" style={mediaStyles.img} {...this.props} />;
  }
}

Img.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired
};

class ImgExt extends Component {
  render () {
    return <img style={mediaStyles.imgExt} {...this.props} />;
  }
}

ImgExt.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired
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
