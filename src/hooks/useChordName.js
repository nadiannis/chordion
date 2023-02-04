import { useContext } from 'react';

import ChordNameContext from '../contexts/ChordNameContext';

export default function useChordName() {
  return useContext(ChordNameContext);
}
