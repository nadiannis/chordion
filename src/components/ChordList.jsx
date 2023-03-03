import React from 'react';
import { all as getAllChords } from '@tonaljs/chord-type';

import useChordInfo from '../hooks/useChordInfo';
import useChordSound from '../hooks/useChordSound';
import { getChordNotes } from '../utils/chord';
import Button from './Button';

export default function ChordList() {
  const {
    selectedStartNote,
    selectedOctave,
    selectedChordName,
    setSelectedChordName,
  } = useChordInfo();
  const { play } = useChordSound();

  const chordNames = getAllChords().map((chord) => chord.aliases[0]);

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
          className={
            chordName === selectedChordName
              ? 'outline outline-offset-4 outline-4 outline-indigo-400'
              : ''
          }
        >
          {chordName}
        </Button>
      ))}
    </div>
  );
}
