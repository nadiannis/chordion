import React from 'react';
import { all as getAllChords } from '@tonaljs/chord-type';

import useChordName from '../hooks/useChordName';
import Button from './Button';

export default function ChordList() {
  const { setSelectedChordName } = useChordName();
  const chordNames = getAllChords().map((chord) => chord.aliases[0]);

  const handleButtonClick = (e) => {
    setSelectedChordName(e.target.textContent);
  };

  return (
    <div className="grid grid-cols-auto-fit gap-7">
      {chordNames.map((chord, index) => (
        <Button key={index} handleClick={handleButtonClick}>
          {chord}
        </Button>
      ))}
    </div>
  );
}
