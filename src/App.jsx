import React from 'react';
import ChordButtonsSection from './layouts/ChordButtonsSection';
import MainSection from './layouts/MainSection';

function App() {
  return (
    <div className="block lg:flex">
      <MainSection />
      <ChordButtonsSection />
    </div>
  );
}

export default App;
