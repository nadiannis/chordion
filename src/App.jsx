import React from 'react';

import { ChordInfoContextProvider } from './context/ChordInfoContext';
import { ChordSoundContextProvider } from './context/ChordSoundContext';
import ChordButtonsSection from './layouts/ChordButtonsSection';
import MainSection from './layouts/MainSection';

function App() {
  return (
    <ChordInfoContextProvider>
      <ChordSoundContextProvider>
        <div className="block lg:flex">
          <MainSection />
          <ChordButtonsSection />
        </div>
      </ChordSoundContextProvider>
    </ChordInfoContextProvider>
  );
}

export default App;
