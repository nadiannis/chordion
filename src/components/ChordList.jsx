import React from 'react';
import { all as getAllChords } from '@tonaljs/chord-type';

import Button from './Button';

export default function ChordList() {
  const chords = getAllChords().map((chord) => chord.aliases[0]);

  return (
    <div className="grid grid-cols-auto-fit gap-7">
      {chords.map((chord, index) => (
        <Button key={index}>{chord}</Button>
      ))}
    </div>
  );
}
