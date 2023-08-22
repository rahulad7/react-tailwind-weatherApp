const DayForecast = () => {
  return (
    <div>
      <div className="flex items-center justify-center mt-6">
        <p className="text-white font-medium uppercase">hourly forecast </p>
      </div>
      <hr className="my-2" />

      <div className="flex flex-row items-center justify-evenly text-white">
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">MON</p>
          <img src="./icon1.png" alt="" className="w-12 my-1" />
          <p className="font-medium">29°c</p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">MON</p>
          <img src="./icon1.png" alt="" className="w-12 my-1" />
          <p className="font-medium">29°c</p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">MON</p>
          <img src="./icon1.png" alt="" className="w-12 my-1" />
          <p className="font-medium">29°c</p>
        </div>
      </div>
    </div>
  );
};

export default DayForecast;
