import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

const ChordInfoContext = createContext();
export default ChordInfoContext;

export const ChordInfoContextProvider = ({ children }) => {
  const [selectedStartNote, setSelectedStartNote] = useState('C');
  const [selectedOctave, setSelectedOctave] = useState(3);
  const [selectedChordName, setSelectedChordName] = useState('major');

  const context = {
    selectedStartNote,
    selectedOctave,
    selectedChordName,
    setSelectedStartNote,
    setSelectedOctave,
    setSelectedChordName,
  };

  return (
    <ChordInfoContext.Provider value={context}>
      {children}
    </ChordInfoContext.Provider>
  );
};

ChordInfoContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
