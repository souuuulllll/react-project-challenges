

function InputForm() {
  return (
    <div className="grid w-full max-w-90 gap-5">
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
  )
}

export default InputForm