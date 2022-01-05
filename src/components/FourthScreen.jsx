import React, { Fragment, useRef } from "react";
import { Controller, Scene } from "react-scrollmagic";
import FourthSequence from "../Sequence/FourthSequence";
const FourthScreen = () => {
  const ref = useRef();
  return (
    <Fragment>
      <Controller>
        <Scene duration="200%" triggerHook="onLeave" pin>
          {(progress) => (
            <div style={{ height: "100vh", position: "relative" }}>
              <FourthSequence ref={ref} progress={progress} />
            </div>
          )}
        </Scene>
      </Controller>
    </Fragment>
  );
};

export default FourthScreen;
