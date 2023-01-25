import React from 'react';
import Heading from './Heading';

function App() {
  return (
    <div className="bg-gray-800 min-h-screen flex justify-center items-center">
      <div>
        <Heading color="text-pink-200">Vite</Heading>
        <span className="text-center font-bold text-4xl text-white block m-3">
          +
        </span>
        <Heading color="text-indigo-200">React.js</Heading>
        <span className="text-center font-bold text-4xl text-white block m-3">
          +
        </span>
        <Heading color="text-green-200">Tailwind CSS</Heading>
      </div>
    </div>
  );
}

export default App;
