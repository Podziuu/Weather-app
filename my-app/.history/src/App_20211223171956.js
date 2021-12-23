// import image from '../assets/blue_mountains.jpg'

function App() {
  return (
    <div className="bg-[url('https://github.com/TylerPottsDev/weather-react/blob/master/src/assets/cold-bg.jpg?raw=true')] bg-cover bg-center h-screen w-screen">
      <main style={{backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.75))'}} className="p-8 pt-0 h-screen">
        <div className="flex justify-center">
          <input
            className="w-screen h-8 border border-black rounded-b-xl focus:outline-none opacity-80 p-5 shadow-sm shadow-black text-center"
            type="search"
          />
        </div>
        <div className="flex flex-col justify-center items-center mt-20">
          <div className="text-center text-white">
            <h1 style={{textShadow: '2px 2px #000000'}} className="text-4xl font-bold" >Łódź, Poland</h1>
            <h6 className="text-lg mt-1">Wednesday 22 December 2021</h6>
          </div>
          <div style={{textShadow: '2px 2px #000000'}} className='text-6xl font-bold text-white border px-7 py-9 rounded-xl bg-white/[.2]'>
            30°C
          </div>
          <div>Sunny</div>
        </div>
      </main>
    </div>
  );
}

export default App;
