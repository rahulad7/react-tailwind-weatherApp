import {
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";

const Tempertature = () => {
  return (
    <div>
      <div className="flex justify-center my-6 items-center text-xl text-cyan-300">
        Cloudy
      </div>

      <div className="flex flex-row  items-center justify-evenly text-white py-3">
        <img src="./icon.png" alt="" className="w-20" />
        <p className="text-4xl">33°c</p>
        <div className="flex flex-col space-y-2">
          <div className="flex font-light text-sm items-center justify-center">
            <UilTemperature size={18} className="mr-1" />
            Real fell:
            <span className="font-medium ml-1">32°c</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <UilTear size={18} className="mr-1" />
            Humidity:
            <span className="font-medium ml-1">40%</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <UilWind size={18} className="mr-1" />
            wind:
            <span className="font-medium ml-1">2km/h</span>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
        <UilSun />
        <p className="font-light">
          Rise: <span className="font-medium ml-1">06:45 AM</span>
        </p>
        <div>|</div>
        <UilSunset />
        <p className="font-light">
          Rise: <span className="font-medium ml-1">06:45 AM</span>
        </p>
      </div>
    </div>
  );
};

export default Tempertature;
