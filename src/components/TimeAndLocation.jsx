import { useContext } from "react";
import { WeatherContext } from "./WeatherContext";

const TimeAndLocation = () => {
  const { data } = useContext(WeatherContext);
  return (
    <div className="justify-center">
      <div className="justify-center flex items-center my-6">
        <p className="text-white text-xl font-extralight">
          {new Date(data.location.localtime).toLocaleDateString("en-uS", {
            weekday: "long",
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          })}
        </p>
      </div>
      <div className="flex items-center justify-center my-3">
        <p className="text-white text-3xl font-medium">{data.location.name}</p>
      </div>
    </div>
  );
};

export default TimeAndLocation;
