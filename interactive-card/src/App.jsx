function App() {
  return (
    <div className="h-screen grid grid-cols-[30%_70%]">
      <div className="relative z-10 h-full bg-[url('/images/bg-main-desktop.png')] bg-cover bg-no-repeat">
        <div className="w-100 absolute top-[20%] left-[40%] place-items-center">
          <img src="/images/bg-card-front.png" alt="img" className="w-full" />
          <img
            src="/images/card-logo.svg"
            alt="logo"
            className=" absolute top-8 left-8"
          />
          <p className="absolute bottom-14 text-White text-2xl font-medium tracking-[0.3rem]">
            0000 0000 0000 0000
          </p>
          <div className="absolute bottom-6 right-6 left-5 flex justify-between text-White text-xs">
            <p>Jane Appleseed</p>
            <p>00/00</p>
          </div>
        </div>
        <div className="w-100 absolute top-[55%] left-[60%]">
          <img src="/images/bg-card-back.png" alt="img " />
          <p className="absolute bottom-[45%] right-[12%] text-White tracking-widest">
            000
          </p>
        </div>
      </div>

      <div className="bg-White grid place-items-center">
        <div className="w-90 grid gap-5">
          <div className="">
            <p className="uppercase font-medium">Cardholder Name</p>

            <input
              type="text"
              placeholder="e.g. Jane Appleseed"
              className="border w-full px-3 py-2 rounded-xl border-Gray-400 placeholder:text-Gray-200 "
            />
          </div>
          <div className="">
            <p className="uppercase font-medium">Card Number</p>

            <input
              type="text"
              placeholder="e.g. 1234 5678 9123 0000"
              className="border w-full px-3 py-2 rounded-xl border-Gray-400 placeholder:text-Gray-200 "
            />
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <p className="uppercase text-xs font-medium">Exp. Date (MM/YY)</p>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="MM"
                  className="mt-1 border w-full px-2 py-1 rounded-xl border-Gray-400 placeholder:text-Gray-200 "
                />
                <input
                  type="text"
                  placeholder="YY"
                  className="mt-1 border w-full px-2 py-1 rounded-xl border-Gray-400 placeholder:text-Gray-200 "
                />
              </div>
            </div>
            <div className="">
              <p className="text-xs font-medium">CVC</p>
              <input
                type="text"
                placeholder="e.g. 123"
                className=" mt-1 border w-full px-2 py-1 rounded-xl border-Gray-400 placeholder:text-Gray-200 "
              />
            </div>
          </div>

          <button className="mt-4 w-full rounded-lg bg-Purple-950 py-3 text-White">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
