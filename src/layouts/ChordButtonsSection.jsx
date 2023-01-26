import React from 'react';
import ChordList from '../components/ChordList';

import Container from '../components/Container';

export default function ChordButtonsSection() {
  return (
    <section className="bg-slate-100 lg:flex-1 py-7">
      <Container>
        <ChordList />
      </Container>
    </section>
  );
}
