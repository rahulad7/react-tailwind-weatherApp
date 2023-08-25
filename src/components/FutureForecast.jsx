import PropTypes from "prop-types";
function FutureForecast({ data }) {
  return (
    <div>
      <div className="flex items-center justify-center mt-6">
        <p className="text-white font-medium uppercase">Future forecast </p>
      </div>
      <hr className="my-2" />

      <div className="flex flex-row items-center justify-evenly text-white">
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">
            {new Date(data.forecast.forecastday[0].date).toLocaleString(
              "en-us",
              { weekday: "short" }
            )}
          </p>
          <img
            src={data.forecast.forecastday[0].day.condition.icon}
            alt=""
            className="w-12 my-1"
          />
          <p className="font-medium">
            {data.forecast.forecastday[0].day.avgtemp_c.toFixed()} °c
          </p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">
            {new Date(data.forecast.forecastday[1].date).toLocaleString(
              "en-us",
              { weekday: "short" }
            )}
          </p>
          <img
            src={data.forecast.forecastday[1].day.condition.icon}
            alt=""
            className="w-12 my-1"
          />
          <p className="font-medium">
            {data.forecast.forecastday[1].day.avgtemp_c.toFixed()} °c
          </p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">
            {new Date(data.forecast.forecastday[2].date).toLocaleString(
              "en-us",
              { weekday: "short" }
            )}
          </p>
          <img
            src={data.forecast.forecastday[2].day.condition.icon}
            alt=""
            className="w-12 my-1"
          />
          <p className="font-medium">
            {data.forecast.forecastday[2].day.avgtemp_c.toFixed()} °c
          </p>
        </div>
      </div>
    </div>
  );
}
// new Date(data.forecast.forecastday[0].date).toLocaleString

FutureForecast.propTypes = {
  data: PropTypes.shape({
    forecast: PropTypes.shape({
      forecastday: PropTypes.arrayOf(
        PropTypes.shape({
          date: PropTypes.string,
          day: PropTypes.shape({
            condition: PropTypes.shape({
              icon: PropTypes.string,
            }),
            avgtemp_c: PropTypes.number,
          }),
        })
      ),
    }),
  }).isRequired,
};

export default FutureForecast;
