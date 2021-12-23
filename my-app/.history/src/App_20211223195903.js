import { useRef, useState } from "react";

// Api key api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// my api key 5526440f87f0eae7d6b98fd71afce7cf

function App() {
  const [weatherData, setWeatherData] = useState({});
  const inputRef = useRef();
  const API_KEY = "5526440f87f0eae7d6b98fd71afce7cf";

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
          city: city,
          country: data.sys.country,
          temperature: Math.round(data.main.temp),
          description: data.weather[0].main,
      })
      inputRef.current.value = "";
    }
  };

  console.log(weatherData)

  // fetch(`api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}`)

  return (
    <div className="bg-[url('https://github.com/TylerPottsDev/weather-react/blob/master/src/assets/cold-bg.jpg?raw=true')] bg-cover bg-center h-screen w-screen">
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
        <div className="flex flex-col justify-center items-center mt-36">
          <div className="text-center text-white">
            <h1
              style={{ textShadow: "2px 2px #000000" }}
              className="text-4xl font-bold"
            >
              Łódź, Poland
            </h1>
            <h6 className="text-lg mt-1">Wednesday 22 December 2021</h6>
          </div>
          <div
            style={{ textShadow: "3px 3px #000000" }}
            className="text-6xl font-bold text-white border border-slate-800 px-7 py-9 rounded-xl bg-white/[.2] shadow-xl mt-5"
          >
            30°C
          </div>
          <div
            style={{ textShadow: "3px 3px #000000" }}
            className="text-white text-5xl font-bold mt-3"
          >
            Sunny
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
