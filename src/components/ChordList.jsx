import React from 'react';
import PropTypes from 'prop-types';

import useChordInfo from '../hooks/useChordInfo';
import useChordSound from '../hooks/useChordSound';
import { getChordNames, getChordNotes } from '../utils/chord';
import Button from './Button';

export default function ChordList({ snapTo = null }) {
  const {
    selectedStartNote,
    selectedOctave,
    selectedChordName,
    setSelectedChordName,
  } = useChordInfo();
  const { play, state } = useChordSound();

  const chordNames = getChordNames();

  const handleButtonClick = (e) => {
    const chordNotes = getChordNotes(
      selectedStartNote,
      selectedOctave,
      e.target.textContent
    );

    setSelectedChordName(e.target.textContent);
    play(chordNotes);

    snapTo && snapTo(2);
  };

  return (
    <div className="grid grid-cols-auto-fit gap-7">
      {chordNames.map((chordName, index) => (
        <Button
          key={index}
          handleClick={handleButtonClick}
          isLoading={state !== 'loaded'}
          className={`capitalize hover:cursor-listen active:cursor-listen ${
            state === 'loaded' && chordName === selectedChordName
              ? 'outline outline-offset-4 outline-4 outline-indigo-400'
              : ''
          }`}
        >
          {chordName}
        </Button>
      ))}
    </div>
  );
}

ChordList.propTypes = {
  snapTo: PropTypes.func,
};
