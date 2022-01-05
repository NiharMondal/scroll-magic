import React, {Fragment, useRef } from 'react';
import { Controller, Scene } from "react-scrollmagic";
import FifthSequence from '../Sequence/FifthSequence'

const FifthScreen = () => {
  const ref = useRef()
  return (
    <Fragment>
      <Controller>
        <Scene duration="200%" triggerHook="onLeave" pin>
          {(progress) => (
            <div style={{ height: "100vh", position: "relative" }}>
              <FifthSequence ref={ref} progress={progress} />
            </div>
          )}
        </Scene>
      </Controller>
    </Fragment>
  );
};

export default FifthScreen;