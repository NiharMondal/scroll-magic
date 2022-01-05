import React from "react";
import FifthScreen from "./components/FifthScreen";
import FirstScreen from "./components/FirstScreen";
import FourthScreen from "./components/FourthScreen";
import SecondScreen from "./components/SecondScreen";
import ThirdScreen from "./components/ThirdScreen";

const App = () => {
  return (
    <div>
      <FirstScreen />
      <SecondScreen />
      <ThirdScreen />
      <FourthScreen />
      <FifthScreen />
    </div>
  );
};

export default App;
