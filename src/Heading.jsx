import React from 'react';
import PropTypes from 'prop-types';

export default function Heading({ children, color }) {
  return (
    <h1 className={`text-center font-bold text-5xl ${color}`}>{children}</h1>
  );
}

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired,
};
