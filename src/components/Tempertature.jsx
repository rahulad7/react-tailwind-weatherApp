import { UilSun, UilSunset } from "@iconscout/react-unicons";
import CurrentConditions from "./CurrentConditons";
import { useContext } from "react";
import { WeatherContext } from "./WeatherContext";

function Tempertature() {
  const { data } = useContext(WeatherContext);
  return (
    <div>
      <div className="flex justify-center my-6 items-center text-xl text-cyan-300">
        {data.current.condition.text}
      </div>

      <div className="flex flex-row  items-center justify-evenly text-white py-3">
        <img src={data.current.condition.icon} alt="" className="w-20" />
        <p className="text-4xl">{data.current.temp_c} °c</p>
        <div className="flex flex-col space-y-2">
          <CurrentConditions data={data} />
        </div>
      </div>
      <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
        <UilSun />
        <p className="font-light">
          Rise:{" "}
          <span className="font-medium ml-1">
            {data.forecast.forecastday[0].astro.sunrise}
          </span>
        </p>
        <div>|</div>
        <UilSunset />
        <p className="font-light">
          Set:{" "}
          <span className="font-medium ml-1">
            {data.forecast.forecastday[0].astro.sunset}
          </span>
        </p>
      </div>
    </div>
  );
}

export default Tempertature;
