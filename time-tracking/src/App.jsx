import { useState } from "react";
import Profile from "./components/Profile";
import TrackingCards from "./components/TrackingCards";

function App() {
  const [timeFrameState, setTimeFrameState] = useState("Daily");

  return (
    <>
      <div className="bg-Navy-950  min-h-screen grid place-items-center">
        <div className="max-w-3xl grid grid-cols-1 md:grid-cols-4 gap-2 grid-rows-[200px_minmax(200px,1fr)_100px]">
          <Profile
            timeFrameState={timeFrameState}
            setTimeFrameState={setTimeFrameState}
          />
          <TrackingCards timeFrameState={timeFrameState} />
        </div>
      </div>
    </>
  );
}

export default App;
