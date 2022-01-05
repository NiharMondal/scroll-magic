import React, { Fragment, useRef } from "react";
import { Controller, Scene } from "react-scrollmagic";
import SecondSequence from "../Sequence/SecondSequence";

const SecondScreen = () => {
  const ref = useRef();
  return (
    <Fragment>
      <Controller>
        <Scene duration="200%" triggerHook="onLeave" pin>
          {(progress) => (
            <div style={{ height: "100vh", position: "relative" }}>
              <SecondSequence ref={ref} progress={progress} />
            </div>
          )}
        </Scene>
      </Controller>
    </Fragment>
  );
};

export default SecondScreen;
