import React from 'react';
import { ChordNameContextProvider } from './contexts/ChordNameContext';

import ChordButtonsSection from './layouts/ChordButtonsSection';
import MainSection from './layouts/MainSection';

function App() {
  return (
    <ChordNameContextProvider>
      <div className="block lg:flex">
        <MainSection />
        <ChordButtonsSection />
      </div>
    </ChordNameContextProvider>
  );
}

export default App;
