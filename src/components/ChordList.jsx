import React from 'react';

import useChordInfo from '../hooks/useChordInfo';
import useChordSound from '../hooks/useChordSound';
import { getChordNames, getChordNotes } from '../utils/chord';
import Button from './Button';

export default function ChordList() {
  const {
    selectedStartNote,
    selectedOctave,
    selectedChordName,
    setSelectedChordName,
  } = useChordInfo();
  const { play } = useChordSound();

  const chordNames = getChordNames();

  const handleButtonClick = (e) => {
    const chordNotes = getChordNotes(
      selectedStartNote,
      selectedOctave,
      e.target.textContent
    );

    setSelectedChordName(e.target.textContent);
    play(chordNotes);
  };

  return (
    <div className="grid grid-cols-auto-fit gap-7">
      {chordNames.map((chordName, index) => (
        <Button
          key={index}
          handleClick={handleButtonClick}
          className={`capitalize ${
            chordName === selectedChordName
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
