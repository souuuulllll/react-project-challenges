
import ExtensionCards from "./components/ExtensionCards"

import NavBar from "./components/NavBar"
import Tabs from "./components/Tabs"


function App() {
 

  return (
    <>
    <div className="bg-Neutral-900 min-h-screen grid place-items-center">
      <div className=" md:max-w-6xl p-10 mt-2">
        <NavBar/>
        <div className="md:flex grid place-items-center gap-2 md:justify-between mt-6 md:mt-12">
          <p className="text-Neutral-0 text-3xl font-bold">Extensions List</p>
          <Tabs/>
        </div>
        <div className="grid md:grid-cols-3 gap-2">
        <ExtensionCards/>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
