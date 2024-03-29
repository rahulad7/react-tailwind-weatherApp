import { UilTemperature, UilTear, UilWind } from "@iconscout/react-unicons";
import { useContext } from "react";
import { WeatherContext } from "./WeatherContext";

function CurrentConditions() {
  const { data } = useContext(WeatherContext);
  return (
    <div className="space-y-2">
      <div className="flex font-light text-sm items-center justify-center">
        <UilTemperature size={18} className="mr-1" />
        Real fell:
        <span className="font-medium ml-1">{data.current.feelslike_c}°c</span>
      </div>
      <div className="flex font-light text-sm items-center justify-center">
        <UilTear size={18} className="mr-1" />
        Humidity:
        <span className="font-medium ml-1">{data.current.humidity}%</span>
      </div>
      <div className="flex font-light text-sm items-center justify-center">
        <UilWind size={18} className="mr-1" />
        wind:
        <span className="font-medium ml-1">{data.current.wind_kph}/kph</span>
      </div>
    </div>
  );
}

export default CurrentConditions;
