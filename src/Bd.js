import React, { PropTypes } from 'react';
import styleResolver from './utils/styleResolver';

const styles = {
  display: 'table-cell',
  verticalAlign: 'top',
  width: '10000px !important'
};

const Bd = (props) => (
  <div {...props} style={styleResolver(styles, props)} />
);

export default Bd;

Bd.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object
};
