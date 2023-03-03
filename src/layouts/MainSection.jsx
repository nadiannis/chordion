import React from 'react';

import startNotes from '../data/startNotes';
import octaves from '../data/octaves';
import {
  getChordAlias,
  getChordIntervals,
  getChordNotes,
} from '../utils/chord';
import useChordInfo from '../hooks/useChordInfo';
import Container from '../components/Container';

export default function MainSection() {
  const {
    selectedStartNote,
    selectedChordName,
    selectedOctave,
    setSelectedStartNote,
    setSelectedOctave,
  } = useChordInfo();

  const chordAlias = getChordAlias(selectedChordName);
  const chordIntervals = getChordIntervals(selectedChordName);
  const chordNotes = getChordNotes(
    selectedStartNote,
    selectedOctave,
    selectedChordName
  );

  const handleStartNoteChange = (e) => {
    setSelectedStartNote(e.target.value);
  };

  const handleOctaveChange = (e) => {
    setSelectedOctave(e.target.value);
  };

  return (
    <main className="bg-slate-100 bg-gradient-to-tl from-indigo-200 to-cyan-50 h-screen lg:flex-1 lg:sticky lg:top-0 py-7">
      <Container className="flex flex-col h-full">
        <div className="font-semibold mb-8">
          <span className="block text-lg">Start note: {selectedStartNote}</span>
          <span className="block text-lg">Octave: {selectedOctave}</span>
          <span className="block text-lg">Chord type: {chordAlias}</span>
        </div>
        <div className="font-bold text-[2.6rem] text-indigo-500 mb-8 lg:flex-1 flex justify-center items-center gap-4">
          <select
            name="start-note"
            className="px-2 rounded-lg"
            onChange={handleStartNoteChange}
            value={selectedStartNote}
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
            value={selectedOctave}
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
            <h2 className="font-extrabold leading-tight text-2xl sm:text-3xl md:text-4xl mb-4">
              {chordNotes.join(' - ')}
            </h2>
            <span className="font-bold text-slate-400 text-2xl sm:text-3xl md:text-4xl">
              {chordIntervals.join(' - ')}
            </span>
          </div>
        </div>
      </Container>
    </main>
  );
}
