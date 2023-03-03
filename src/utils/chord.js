import { all as getAllChords } from '@tonaljs/chord-type';
import { get as getChord } from '@tonaljs/chord';
import { transpose } from '@tonaljs/tonal';

export const getChordNames = () => {
  return getAllChords()
    .map((chord) => chord.name)
    .filter((chordName) => chordName !== '');
};

export const getChordAlias = (chordName) => {
  return getChord(chordName).aliases[0];
};

export const getChordIntervals = (chordName) => {
  return getChord(chordName).intervals;
};

export const getChordNotes = (startNote, octave, chordName) => {
  const chordIntervals = getChordIntervals(chordName);

  return chordIntervals.map((chordInterval) =>
    transpose(`${startNote}${octave}`, chordInterval)
  );
};
