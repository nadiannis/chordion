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
    <main className="bg-slate-100 bg-gradient-to-tl from-indigo-200 via-cyan-50 to-slate-100 h-screen lg:flex-1 sticky top-0 py-7 overflow-hidden">
      <div className="absolute -top-12 -left-8 -z-10">
        <div className="w-72 h-72 rounded-full bg-gradient-to-br from-indigo-300 to-pink-200 absolute opacity-80 top-0 left-0 blur-3xl"></div>
        <div className="w-48 h-48 rounded-full bg-gradient-to-br from-cyan-300 to-pink-200 absolute opacity-80 top-24 left-52 blur-3xl"></div>
      </div>
      <div className="absolute -bottom-16 right-0 -z-10 -rotate-[135deg]">
        <div className="w-72 h-72 rounded-full bg-gradient-to-br from-indigo-300 to-pink-200 absolute opacity-80 top-0 left-0 blur-3xl"></div>
        <div className="w-48 h-48 rounded-full bg-gradient-to-br from-cyan-300 to-pink-200 absolute opacity-80 top-24 left-52 blur-3xl"></div>
      </div>
      <Container className="flex flex-col h-full">
        <div className="font-semibold text-base sm:text-lg mb-12 sm:mb-8">
          <span className="block">Start note: {selectedStartNote}</span>
          <span className="block">Octave: {selectedOctave}</span>
          <span className="block">Chord type: {chordAlias}</span>
        </div>
        <div className="font-bold text-4xl sm:text-[2.6rem] text-indigo-500 mb-8 lg:flex-1 flex justify-center items-center gap-4">
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
        <div className="bg-none sm:bg-white rounded-3xl flex justify-center items-center w-full sm:h-64 lg:h-1/2 shadow-none lg:shadow-xl px-6 py-2 sm:py-12 lg:mt-auto">
          <div className="hidden sm:block text-center">
            <span className="block font-extrabold leading-tight text-2xl sm:text-3xl md:text-4xl mb-4">
              {chordNotes.join(' - ')}
            </span>
            <span className="block font-bold text-slate-400 text-2xl sm:text-3xl md:text-4xl">
              {chordIntervals.join(' - ')}
            </span>
          </div>
          <div className="flex flex-col justify-center gap-3 sm:hidden">
            <div className="flex flex-wrap gap-3 justify-center">
              {chordNotes.map((chordNote, index) => (
                <span
                  key={index}
                  className="font-extrabold text-base bg-white rounded-full p-3"
                >
                  {chordNote}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
              {chordIntervals.map((chordInterval, index) => (
                <span
                  key={index}
                  className="font-extrabold text-base bg-slate-300 rounded-full p-3"
                >
                  {chordInterval}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
