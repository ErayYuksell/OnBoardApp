import React, { useState } from "react";
import { View, Text } from "react-native";
import OnBoard from "./src/components/OnBoard";
import Home from "./src/components/Home";

const App = () => {
  const [showOnBoard, setShowOnBoard] = useState(true);

  const handleOnBoardFinish = () => {
    return setShowOnBoard(false);
  };
  return (
    <>
      {showOnBoard && <OnBoard handleDone={handleOnBoardFinish} />}
      {!showOnBoard && <Home />}
    </>
  );
};

export default App;
