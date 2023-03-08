import React, { useState, useEffect, useRef } from 'react';
import Sheet from 'react-modal-sheet';

import ChordList from '../components/ChordList';
import Container from '../components/Container';

const lgBreakpoint = 1024;
const snapPoints = [0.5, 0.35, 0.2];
const initialSnapIndex = 2;
const springConfig = { stiffness: 150, damping: 30, mass: 0.7 };

export default function ChordButtonsSection() {
  const sheetRef = useRef();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', getWindowWidth);

    return () => {
      window.removeEventListener('resize', getWindowWidth);
    };
  }, []);

  const getWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  const snapTo = (index) => {
    sheetRef.current.snapTo(index);
  };

  return (
    <>
      <section className="bg-slate-100 py-7 rounded-t-3xl lg:rounded-none shadow-2xl lg:shadow-none lg:flex-1 hidden lg:block lg:static w-full lg:h-full overflow-y-auto">
        <Container>
          <ChordList />
        </Container>
      </section>
      {windowWidth < lgBreakpoint && (
        <Sheet
          ref={sheetRef}
          isOpen={true}
          onClose={() => snapTo(2)}
          snapPoints={snapPoints}
          initialSnap={initialSnapIndex}
          springConfig={springConfig}
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
                paddingBottom: sheetRef.current && sheetRef.current.y.current,
              }}
            >
              <Container className="pt-4 pb-10">
                <ChordList snapTo={snapTo} />
              </Container>
            </Sheet.Content>
          </Sheet.Container>
        </Sheet>
      )}
    </>
  );
}
