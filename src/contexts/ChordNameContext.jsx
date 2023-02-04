import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

const ChordNameContext = createContext();
export default ChordNameContext;

export const ChordNameContextProvider = ({ children }) => {
  const [selectedChordName, setSelectedChordName] = useState('M');

  const context = {
    selectedChordName,
    setSelectedChordName,
  };

  return (
    <ChordNameContext.Provider value={context}>
      {children}
    </ChordNameContext.Provider>
  );
};

ChordNameContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
