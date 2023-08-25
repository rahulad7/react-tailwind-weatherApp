import PropTypes from "prop-types";
import { UilTemperature, UilTear, UilWind } from "@iconscout/react-unicons";

function CurrentConditions({ data }) {
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

CurrentConditions.propTypes = {
  data: PropTypes.shape({
    current: PropTypes.shape({
      feelslike_c: PropTypes.number,
      humidity: PropTypes.number,
      wind_kph: PropTypes.number,
    }),
  }).isRequired,
};

export default CurrentConditions;
