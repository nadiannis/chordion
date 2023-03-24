import { useContext } from 'react';

import ChordSoundContext from '../context/ChordSoundContext';

export default function useChordSound() {
  return useContext(ChordSoundContext);
}
