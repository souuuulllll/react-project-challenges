import OverviewCards from "./components/OverviewCards";
import SocialCards from "./components/SocialCards";

function App() {
  return (
    <>
      <div className="bg-Gray-950 min-h-screen grid place-items-center">
        <div className="md:min-w-5xl p-4">
          <div className="flex items-center justify-between">
            <div className="">
              <h2 className="text-White font-bold text-2xl">
                Social Media Dashboard
              </h2>
              <p className="text-Gray-650 font-bold">Total Followers: 23,004</p>
            </div>
            <div className="flex gap-2">
              <p className="text-Gray-650 font-bold">Dark Mode</p>
              <input
                type="checkbox"
                className="appearance-none relative w-10 h-5 bg-Red-500 outline-none rounded-2xl  transition-all duration-700 cursor-pointer checked:bg-Green-500 before:content-[''] before:absolute before:w-4 before:h-4 before:rounded-2xl before:top-0.5 before:left-0.5 before:bg-Navy-950 before:scale-110  before:transition-all before:duration-500 checked:before:left-5"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-4 mt-10">
            <SocialCards />
          </div>

          <h3 className="text-White font-bold text-2xl mt-8 mb-4">Overview - Today</h3>
          <div className="grid md:grid-cols-4 gap-4 grid-rows-[120px_minmax(120px,1fr)_100px] ">
            <OverviewCards />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
