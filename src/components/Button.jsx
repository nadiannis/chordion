import React from 'react';
import PropTypes from 'prop-types';

export default function Button({
  children,
  handleClick = null,
  className = '',
}) {
  return (
    <button
      className={`px-4 py-5 rounded-3xl font-semibold text-lg text-indigo-500 bg-indigo-100 hover:bg-indigo-200 active:bg-indigo-200 ${className}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  handleClick: PropTypes.func,
  className: PropTypes.string,
};
