import React, { Fragment,useRef } from 'react';
import { Controller, Scene } from "react-scrollmagic";

import FirstSequence from '../Sequence/FirstSequence'
const FirstScreen = () => {
  const ref = useRef()
  return (
    <Fragment>
      <Controller>
        <Scene duration="200%" triggerHook="onLeave" pin>
          {(progress) => (
            <div style={{ height: "100vh", position: "relative" }}>
              <FirstSequence ref={ref} progress={progress} />
            </div>
          )}
        </Scene>
      </Controller>
    </Fragment>
  );
};

export default FirstScreen;