import React from 'react';
import PropTypes from 'prop-types';

export default function Container({ children }) {
  return <div className="w-11/12 mx-auto">{children}</div>;
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
