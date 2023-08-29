import { useState } from "react";
import { UilSearch } from "@iconscout/react-unicons";
import PropTypes from "prop-types";

function Searchbar({ setCity }) {
  const [cityInput, setCityInput] = useState("");

  const handleSearchClick = () => {
    setCity(cityInput);
  };

  return (
    <div className="flex flex-row justify-center mb-6 mt-2">
      <div className="flex flex-row w-3/4 items-center space-x-3">
        <input
          type="text"
          placeholder="Enter City Name..."
          value={cityInput}
          onChange={(e) => setCityInput(e.target.value)}
          className="font-light p-2 w-full shadow-xl focus:outline-none rounded"
        />

        <UilSearch
          size={30}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
          onClick={handleSearchClick}
        />
      </div>
    </div>
  );
}

Searchbar.propTypes = {
  setCity: PropTypes.func.isRequired,
};

export default Searchbar;
