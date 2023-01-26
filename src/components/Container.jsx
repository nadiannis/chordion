import React from 'react';
import PropTypes from 'prop-types';

export default function Container({ children, className = '' }) {
  return <div className={`w-11/12 mx-auto ${className}`}>{children}</div>;
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
