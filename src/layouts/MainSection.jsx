import React, { useState } from 'react';
import { get as getChord } from '@tonaljs/chord';

import useChordName from '../hooks/useChordName';
import Container from '../components/Container';

const startNotes = [
  'C',
  'C#',
  'Db',
  'D',
  'D#',
  'Eb',
  'E',
  'F',
  'F#',
  'Gb',
  'G',
  'G#',
  'Ab',
  'A',
  'A#',
  'Bb',
  'B',
];
const octaves = [1, 2, 3, 4, 5, 6, 7];

export default function MainSection() {
  const { selectedChordName } = useChordName();

  const [startNote, setStartNote] = useState(startNotes[0]);
  const [octave, setOctave] = useState(octaves[0]);
  const chordIntervals = getChord(selectedChordName).intervals.join(' - ');

  const handleStartNoteChange = (e) => {
    console.log(e.target.value);
    setStartNote(e.target.value);
  };

  const handleOctaveChange = (e) => {
    console.log(e.target.value);
    setOctave(e.target.value);
  };

  return (
    <main className="bg-slate-100 bg-gradient-to-tl from-indigo-200 to-cyan-50 h-screen lg:flex-1 lg:sticky lg:top-0 py-7">
      <Container className="flex flex-col h-full">
        <div className="font-semibold mb-8">
          <span className="block text-lg">Start note: {startNote}</span>
          <span className="block text-lg">Octave: {octave}</span>
        </div>
        <div className="font-bold text-[2.6rem] text-indigo-500 mb-8 lg:flex-1 flex justify-center items-center gap-4">
          <select
            name="start-note"
            className="px-2 rounded-lg"
            onChange={handleStartNoteChange}
            value={startNote}
          >
            {startNotes.map((startNote) => (
              <option key={startNote} value={startNote}>
                {startNote}
              </option>
            ))}
          </select>
          <select
            name="octave"
            className="px-2 rounded-lg"
            onChange={handleOctaveChange}
            value={octave}
          >
            {octaves.map((octave) => (
              <option key={octave} value={octave}>
                {octave}
              </option>
            ))}
          </select>
        </div>
        <div className="bg-white rounded-3xl flex justify-center items-center w-full h-64 lg:h-1/2 shadow lg:shadow-xl px-6 py-12 lg:mt-auto">
          <div className="text-center">
            <h2 className="font-extrabold leading-tight text-4xl sm:text-5xl md:text-6xl xl:text-[5.3rem] mb-3.5">
              C - E - G
            </h2>
            <span className="font-bold text-slate-400 text-4xl xl:text-[2.6rem]">
              {chordIntervals}
            </span>
          </div>
        </div>
      </Container>
    </main>
  );
}
