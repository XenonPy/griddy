
import React from 'react';
import PropTypes from 'prop-types';
import './Grid.css';

const Grid = ({ className, griddyTheme, children }) => {
  const gridClasses = `griddy-container griddy-theme-${griddyTheme || 'light'} ${className || ''}`;
  return <div className={gridClasses}>{children}</div>;
};

Grid.propTypes = {
  className: PropTypes.string,
  griddyTheme: PropTypes.string,
  children: PropTypes.node,
};

export default Grid;
