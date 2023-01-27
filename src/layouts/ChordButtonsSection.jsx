import React from 'react';
import ChordList from '../components/ChordList';

import Container from '../components/Container';

export default function ChordButtonsSection() {
  return (
    <section className="bg-slate-100 py-7 rounded-t-3xl lg:rounded-none shadow-2xl lg:shadow-none lg:flex-1 absolute lg:static bottom-0 w-full h-2/5 md:h-1/2 lg:h-full overflow-y-auto">
      <Container>
        <ChordList />
      </Container>
    </section>
  );
}
