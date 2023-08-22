// import UilReact from "@iconscout/react-unicons/icons/uil-react";
import Searchbar from "./components/Searchbar";
import TimeAndLocation from "./components/TimeAndLocation";
import Tempertature from "./components/Tempertature";
import DayForecast from "./components/DayForecast";
import "./index.css";

const App = () => {
  return (
    <div className="mx-auto max-w-screen-md mt-4 bg-gradient-to-br from-cyan-400 to-blue-700 h-fit shadow-xl py-8 shadow-gray-400">
      {/* <UilReact /> */}
      <Searchbar />
      <TimeAndLocation />
      <Tempertature />
      <DayForecast />
    </div>
  );
};

export default App;
