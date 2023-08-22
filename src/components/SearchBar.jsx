import { UilSearch } from "@iconscout/react-unicons";
const Searchbar = () => {
  return (
    <div className="flex flex-row justify-center mb-6 mt-2">
      <div className="flex flex-row w-3/4 items-center space-x-3">
        <input
          type="text"
          placeholder="Enter City Name..."
          className=" font-light p-2 w-full shadow-xl focus:outline-none rounded "
        />
        <UilSearch
          size={30}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
        />
      </div>
    </div>
  );
};

export default Searchbar;
