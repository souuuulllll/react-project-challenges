import { useState } from "react";
import OverviewCards from "./components/OverviewCards";
import SocialCards from "./components/SocialCards";
import ThemeSwitch from "./components/ThemeSwitch";

function App() {
  const [isLightMode, setIsLightMode] = useState(false)

  return (
    <>
      <div className={`${isLightMode ? "bg-white" : "bg-Gray-950"} min-h-screen grid place-items-center `}>
        <div className="md:min-w-5xl p-4">
          <div className="flex items-center justify-between">
            <div className="">
              <h2 className="text-White font-bold text-2xl">
                Social Media Dashboard
              </h2>
              <p className="text-Gray-650 font-bold">Total Followers: 23,004</p>
            </div>
            <ThemeSwitch setIsLightMode={setIsLightMode} isLightMode={isLightMode}/>
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
