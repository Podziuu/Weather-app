import { useRef, useState } from "react";

import {api_key} from './config'

function App() {
  const [weatherData, setWeatherData] = useState();
  const inputRef = useRef();
  const API_KEY = api_key;
  const coldImage = "bg-[url('../assets/blue_mountains.jpg')]";
  const warmImage = "bg-[url('../assets/warmImage.jpg')]";

  const submitHandler = async (e) => {
    if (e.key === "Enter") {
      const city = inputRef.current.value;
      // fetch function here
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      if (!response.ok) {
        return;
      }
      const data = await response.json();
      setWeatherData({
        city: data.name,
        country: data.sys.country,
        temperature: Math.round(data.main.temp),
        description: data.weather[0].main,
      });
      inputRef.current.value = "";
    }
  };

  const getCurrentData = (e) => {
    const DAYS = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednsday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const MONTHS = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const day = DAYS[e.getDay()];
    const date = e.getDate();
    const month = MONTHS[e.getMonth()];
    const year = e.getYear();

    return `${day} ${date} ${month} ${year}`;
  };

  return (
    <div
      className={`${
        weatherData
          ? weatherData.temperature > 15
            ? warmImage
            : coldImage
          : coldImage
      } bg-cover bg-center h-screen w-screen transition-all duration-500`}
    >
      <main
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.75))",
        }}
        className="p-8 pt-0 h-screen"
      >
        <div className="flex justify-center">
          <input
            className="w-screen h-8 border border-black rounded-b-xl focus:outline-none p-5 shadow-sm shadow-black text-center bg-white/[.5] text-xl"
            type="search"
            placeholder="Search..."
            ref={inputRef}
            onKeyPress={submitHandler}
          />
        </div>
        {weatherData && (
          <div className="flex flex-col justify-center items-center mt-36">
            <div className="text-center text-white">
              <h1
                style={{ textShadow: "2px 2px #000000" }}
                className="text-4xl font-bold"
              >
                {`${weatherData.city}, ${weatherData.country}`}
              </h1>
              <h6 className="text-lg mt-1">{getCurrentData(new Date())}</h6>
            </div>
            <div
              style={{ textShadow: "3px 3px #000000" }}
              className="text-6xl font-bold text-white border border-slate-800 px-7 py-9 rounded-xl bg-white/[.2] shadow-xl mt-5"
            >
              {`${weatherData.temperature}??C`}
            </div>
            <div
              style={{ textShadow: "3px 3px #000000" }}
              className="text-white text-5xl font-bold mt-3"
            >
              {weatherData.description}
            </div>
          </div>
        )}
        {!weatherData && (
          <h1
            style={{ textShadow: "1,5px 1.5px #000000" }}
            className="text-3xl text-white text-center mt-36"
          >
            Please search your city above!
          </h1>
        )}
      </main>
    </div>
  );
}

export default App;
