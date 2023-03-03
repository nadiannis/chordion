import { useContext } from 'react';

import ChordSoundContext from '../contexts/ChordSoundContext';

export default function useChordSound() {
  return useContext(ChordSoundContext);
}
