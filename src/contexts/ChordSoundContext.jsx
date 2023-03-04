import React, { useState, createContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { note } from '@tonaljs/tonal';
import { Howl } from 'howler';

import pianoSoundFile from '../assets/pianosound.mp3';

const ChordSoundContext = createContext();
export default ChordSoundContext;

export const ChordSoundContextProvider = ({ children }) => {
  const [sound, setSound] = useState(null);
  const [state, setState] = useState('unloaded');

  useEffect(() => {
    const newSound = new Howl({
      src: [pianoSoundFile],
      onload() {
        const c1MidiNoteNumber = 24;
        const c7MidiNoteNumber = 96;
        const noteTimeLength = 2400;
        let timeIndex = 0;

        for (let i = c1MidiNoteNumber; i <= c7MidiNoteNumber; i++) {
          newSound._sprite[i] = [timeIndex, noteTimeLength];
          timeIndex += noteTimeLength;
        }

        console.log('Sound file has been loaded');
        setState(newSound.state());
      },
      onloaderror(error, message) {
        console.log('Error:', error, message);
        setState(newSound.state());
      },
    });
    setSound(newSound);
    setState(newSound.state());
  }, []);

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
    state,
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
