import React from 'react';

import Button from './Button';

const chords = new Array(100).fill({ name: 'Major' });

export default function ChordList() {
  return (
    <div className="grid grid-cols-auto-fit gap-7">
      {chords.map((chord, index) => (
        <Button key={index}>{chord.name}</Button>
      ))}
    </div>
  );
}
