import React, { useRef } from 'react';
import Sheet from 'react-modal-sheet';

import ChordList from '../components/ChordList';
import Container from '../components/Container';

const snapPoints = [0.5, 0.35, 0.2];
const initialSnapIndex = snapPoints.length - 1;
const springConfig = { stiffness: 150, damping: 20, mass: 0.7 };

export default function ChordButtonsSection() {
  const sheetRef = useRef();

  const snapTo = (index) => {
    sheetRef.current?.snapTo(index);
  };

  return (
    <>
      <section className="bg-slate-100 py-7 rounded-t-3xl lg:rounded-none shadow-2xl lg:shadow-none lg:flex-1 hidden lg:block lg:static w-full lg:h-full overflow-y-auto">
        <Container>
          <ChordList />
        </Container>
      </section>

      <Sheet
        ref={sheetRef}
        isOpen={true}
        onClose={() => snapTo(2)}
        snapPoints={snapPoints}
        initialSnap={initialSnapIndex}
        springConfig={springConfig}
        className="lg:hidden"
      >
        <Sheet.Container>
          <Sheet.Header>
            <span className="sheet-header">
              Choose one of the chord types below
            </span>
          </Sheet.Header>
          <Sheet.Content
            disableDrag
            style={{
              paddingBottom: sheetRef.current?.y,
            }}
          >
            <Container className="pt-4 pb-10">
              <ChordList snapTo={snapTo} />
            </Container>
          </Sheet.Content>
        </Sheet.Container>
      </Sheet>
    </>
  );
}
