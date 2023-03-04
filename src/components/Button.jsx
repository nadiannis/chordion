import React from 'react';
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function Button({
  children,
  handleClick = null,
  className = '',
  isLoading = false,
}) {
  return (
    <button
      className={
        !isLoading
          ? `px-4 py-5 rounded-3xl font-semibold text-lg text-indigo-500 bg-indigo-100 hover:bg-indigo-200 active:bg-indigo-200 ${className}`
          : undefined
      }
      onClick={handleClick}
    >
      {!isLoading ? (
        children
      ) : (
        <Skeleton baseColor="#E8EEF6" borderRadius="1.5rem" height="4rem" />
      )}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  handleClick: PropTypes.func,
  className: PropTypes.string,
  isLoading: PropTypes.bool,
};
