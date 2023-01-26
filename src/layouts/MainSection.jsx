import React from 'react';

import Container from '../components/Container';

export default function MainSection() {
  return (
    <main className="bg-slate-100 bg-gradient-to-tl from-indigo-200 to-cyan-50 h-screen lg:flex-1 lg:sticky lg:top-0 py-7">
      <Container className="flex flex-col h-screen">
        <div className="font-semibold mb-8">
          <span className="block text-lg">Start note: C</span>
          <span className="block text-lg">Octave: 5</span>
        </div>
        <div className="font-bold text-[2.6rem] text-indigo-500 mb-8 lg:flex-1 flex justify-center items-center">
          Controls
        </div>
        <div className="bg-white rounded-3xl flex justify-center items-center w-full h-64 lg:h-1/2 shadow lg:shadow-xl px-6 py-12 lg:mt-auto lg:mb-14">
          <div className="text-center">
            <h2 className="font-extrabold leading-tight text-4xl sm:text-5xl md:text-6xl xl:text-[5.3rem] mb-3.5">
              C - E - G
            </h2>
            <span className="font-bold text-slate-400 text-4xl xl:text-[2.6rem]">
              1 - 3 - 5
            </span>
          </div>
        </div>
      </Container>
    </main>
  );
}
