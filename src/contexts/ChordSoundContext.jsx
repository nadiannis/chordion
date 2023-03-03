import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';
import { note } from '@tonaljs/tonal';
import { Howl } from 'howler';

import pianoSoundFile from '../assets/pianosound.mp3';

const soundSetup = new Howl({
  src: [pianoSoundFile],
  onload() {
    console.log('Sound file has been loaded');

    const c1MidiNoteNumber = 24;
    const c7MidiNoteNumber = 96;
    const noteTimeLength = 2400;
    let timeIndex = 0;

    for (let i = c1MidiNoteNumber; i <= c7MidiNoteNumber; i++) {
      soundSetup._sprite[i] = [timeIndex, noteTimeLength];
      timeIndex += noteTimeLength;
    }
  },
  onloaderror(error, message) {
    console.log('Error:', error, message);
  },
});

const ChordSoundContext = createContext();
export default ChordSoundContext;

export const ChordSoundContextProvider = ({ children }) => {
  const [sound] = useState(() => soundSetup);

  const play = (chordNotes) => {
    sound.volume(0.4);

    const chordMidiNoteNumbers = chordNotes.map((chordNote) => {
      return note(chordNote).midi;
    });

    chordMidiNoteNumbers.forEach((chordMidiNoteNumber) => {
      sound.play(chordMidiNoteNumber.toString());
    });
  };

  const context = {
    play,
  };

  return (
    <ChordSoundContext.Provider value={context}>
      {children}
    </ChordSoundContext.Provider>
  );
};

ChordSoundContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
