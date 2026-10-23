import ActiveList from "./components/ActiveList"
import AllList from "./components/AllList"
import ExtensionCards from "./components/ExtensionCards"
import InactiveList from "./components/InactiveList"
import ThemeSwitch from "./components/ThemeSwitch"

function App() {
 

  return (
    <>
    <div className="bg-Neutral-900 min-h-screen grid place-items-center">
      <div className="md:min-w-5xl p-10 mt-2">
        <div className="bg-Neutral-700 flex justify-between p-3 rounded-2xl">
            <img src="/images/logo.svg" alt="icon" className="w-35" />
          
          <ThemeSwitch/>
        </div>
        <div className="flex justify-between mt-12">
          <p className="text-Neutral-0 text-3xl font-bold">Extensions List</p>
          <div className="flex gap-2">
           <AllList/>
           <ActiveList/>
           <InactiveList/> 
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 grid-rows-[200px_minmax(100px,1fr)_200px]">
        <ExtensionCards/>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
