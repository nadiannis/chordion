import { get as getChord } from '@tonaljs/chord';
import { transpose } from '@tonaljs/tonal';

export const getChordIntervals = (chordName) => {
  return getChord(chordName).intervals;
};

export const getChordNotes = (startNote, octave, chordName) => {
  const chordIntervals = getChordIntervals(chordName);

  return chordIntervals.map((chordInterval) =>
    transpose(`${startNote}${octave}`, chordInterval)
  );
};
