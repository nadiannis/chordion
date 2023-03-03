import { useContext } from 'react';

import ChordInfoContext from '../contexts/ChordInfoContext';

export default function useChordInfo() {
  return useContext(ChordInfoContext);
}
