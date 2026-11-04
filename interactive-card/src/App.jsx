function App() {
  return (
    <div className="h-screen grid grid-cols-[30%_70%]">
      <img src="./images/bg-main-desktop.png" alt="img" />
      <div className="bg-White grid place-items-center">
        <div className="w-100  overflow-hidden">
          <div className="w-full">
          <div className="">
            <p className="uppercase">Cardholder Name</p>

            <input type="text" className="border w-full" />
          </div>
          <div className="">
            <p className="uppercase">Card Number</p>

            <input type="text" className="border w-full" />
          </div>

          <div className="flex gap-4">
            <div className="">
              <p className="uppercase">Exp. Date (MM/YY)</p>
              <div className="flex gap-2">
                <input type="text" className="border"/>
                <input type="text" className="border"/>
              </div>
            </div>
            <div className="">
              <p className="">CVC</p>
              <input type="text" className="border"/>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
