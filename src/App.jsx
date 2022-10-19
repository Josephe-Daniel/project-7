import React, { useEffect, useState } from "react";
import { HashRouter } from "react-router-dom";
import { AppContext } from "./AppContext";
import RoutesConfig from "./routes/RoutesConfig";
import dataJson from "./data/logements.json";

const App = () => {
  const [data, setData] = useState([]);

  // Catch and store datas
  useEffect(() => {
    const fetchData = async () => {
      setData(dataJson);
    };
    fetchData();
  }, []);

  return (
    // Router configuration
    <HashRouter>
      {/* Sharing datas with other components and pages using useContext*/}
      <AppContext.Provider value={data}>
        <RoutesConfig />
      </AppContext.Provider>
    </HashRouter>
  );
};

export default App;
