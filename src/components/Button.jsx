import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ children, handleClick = null }) {
  return (
    <button
      className="px-4 py-5 rounded-3xl font-semibold text-xl text-indigo-500 bg-indigo-100 hover:bg-indigo-200 active:bg-indigo-200"
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  handleClick: PropTypes.func,
};
