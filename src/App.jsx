import { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";

import Searchbar from "./components/Searchbar";
import TimeAndLocation from "./components/TimeAndLocation";
import Tempertature from "./components/Tempertature";
import FutureForecast from "./components/FutureForecast";
import { WeatherContext } from "./components/WeatherContext";

const App = () => {
  const [data, setData] = useState([]);
  const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=1d35dcc8063b4122ad764306233001&q=belgaum&days=7`;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(apiUrl).then((res) => {
      setData(res.data);
      setLoading(false);
      console.log(res.data);
    });
  }, [apiUrl]);

  return (
    <div className="mx-auto max-w-screen-md mt-4 bg-gradient-to-br from-cyan-400 to-blue-700 h-fit shadow-xl py-8 shadow-gray-400">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <WeatherContext.Provider value={{ data }}>
            <Searchbar />
            <TimeAndLocation />
            <Tempertature />
            <FutureForecast />
          </WeatherContext.Provider>
        </>
      )}
    </div>
  );
};

export default App;
