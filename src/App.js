import React, { useState } from "react";
import StandardUnitsContainer from "./containers/StandardUnitsContainer";
import GlobalDataContainer from "./containers/GlobalDataContainer";
import SoldUnitsContainer from "./containers/SoldUnitsContainer";
import DeadUnitsContainer from "./containers/DeadUnitsContainer";
import ExamContainer from "./containers/ExamContainer";
import Navbar from "./components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  const [showUnits, setShowUnits] = useState(true);
  // const [showForage, setShowForage] = useState(false);
  const [showGlobal, setShowGlobal] = useState(false);
  // const [showWater, setShowWater] = useState(false);
  const [showSold, setShowSold] = useState(false);
  const [showDead, setShowDead] = useState(false);
  const [showExams, setShowExams] = useState(false);

  const [unitID, setUnitID] = useState("");

  const toggleComponent = (unit, forage, global, water, sold, dead) => {
    setShowUnits(unit);
    // setShowForage(forage || false);
    setShowGlobal(global || false);
    // setShowWater(water || false);
    setShowSold(sold || false);
    setShowDead(dead || false);
  };

  const showUnitsHandler = () => toggleComponent(true);
  const showForageHandler = () => toggleComponent(false, true);
  const showGlobalHandler = () => toggleComponent(false, false, true);
  const showWaterHandler = () => toggleComponent(false, false, false, true);
  const showSoldHandler = () =>
    toggleComponent(false, false, false, false, true);
  const showDeadHandler = () =>
    toggleComponent(false, false, false, false, false, true);

  const toggleExams = () => setShowExams(!showExams);

  const setUnit = id => setUnitID(id);

  return (
    <div className="App">
      <Navbar
        unitsHandler={showUnitsHandler}
        forageHandler={showForageHandler}
        globalHandler={showGlobalHandler}
        waterHandler={showWaterHandler}
        soldHandler={showSoldHandler}
        deadHandler={showDeadHandler}
      />
      {showGlobal && <GlobalDataContainer />}
      {showUnits && <StandardUnitsContainer toggleExams={toggleExams} setUnitID={setUnit}/>}
      {showSold && <SoldUnitsContainer isOn={showSold} />}
      {showDead && <DeadUnitsContainer isOn={showDead} />}
      {showExams && <ExamContainer toggleExams={toggleExams} unitID={unitID}/>}
    </div>
  );
};

export default App;
