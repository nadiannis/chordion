import { useContext } from 'react';

import ChordInfoContext from '../context/ChordInfoContext';

export default function useChordInfo() {
  return useContext(ChordInfoContext);
}
