// src/components/GridItem.js
import React from 'react';
import PropTypes from 'prop-types';
import './GridItem.css';

const GridItem = ({ griddyPosition, className, children }) => {
  const itemClasses = `griddy-item griddy-position-${griddyPosition} ${className || ''}`;

  return <div className={itemClasses}>{children}</div>;
};

GridItem.propTypes = {
  griddyPosition: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default GridItem;
