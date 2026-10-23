function ExtensionCard({item}) {
  const {logo, name, description} = item;
  return (
    <div className="bg-Neutral-800 border border-Neutral-600 p-4 rounded-xl mt-6">
      <div className="flex gap-4 items-start">
        <img src={logo} alt="icon" className="object-cover aspect-square"/>
        <div className="">
          <h2 className="text-xl font-bold text-Neutral-0">{name}</h2>
          <p className="text-Neutral-300 text-sm mt-1">{description}</p>
        </div>
      </div>
      <div className="flex justify-between items-center mt-10">
        <button className="border border-Neutral-600 rounded-3xl px-3 pt-1.5 pb-2 text-xs text-Neutral-0">Remove</button>
        <input type="checkbox" className="appearance-none relative w-9 h-5 bg-Neutral-600 outline-none rounded-2xl  transition-all duration-700 cursor-pointer checked:bg-Red-500 before:content-[''] before:absolute before:w-4 before:h-4 before:rounded-2xl before:top-0.5 before:left-0 before:bg-Neutral-0 before:scale-110  before:transition-all before:duration-500 checked:before:left-4.5"/>
      </div>
    </div>
  );
}

export default ExtensionCard;
