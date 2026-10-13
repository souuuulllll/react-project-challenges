import TrackingCards from "./components/TrackingCards"

function App() {
  

  return (
    <>
      <div className="bg-Navy-950 min-h-screen grid place-items-center">
        <div className="w-2xl grid grid-cols-4 gap-2 grid-rows-[200px_minmax(200px,1fr)_100px]">
          <div className="row-span-2 bg-Navy-900 rounded-xl overflow-hidden">
              <div className="bg-Purple-600 rounded-xl h-[70%] grid p-5">
                <img src="/images/image-jeremy.png" alt="img" className="w-12 object-cover border-2 rounded-full border-white" />
                <p className="text-xs text-Navy-200">Report for <strong className="text-3xl font-medium">Jeremy Robson</strong></p>
                <h3 ></h3>
              </div>
              <div className="grid grid-flow-row gap-2 p-5">
              <a href="" className="text-Navy-200 text-xs">Daily</a>
              <a href="" className="text-Navy-200 text-xs">Weekly</a>
              <a href="" className="text-Navy-200 text-xs">Monthly</a>
              </div>
              
          </div>
          <TrackingCards/>
        </div>
      </div>
    </>
  )
}

export default App
