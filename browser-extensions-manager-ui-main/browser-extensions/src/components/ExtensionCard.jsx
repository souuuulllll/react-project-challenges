function ExtensionCard({item}) {
  const {logo, name, description} = item;
  return (
    <div className="bg-Neutral-700 p-4 rounded-xl mt-6">
      <div className="flex gap-4">
        <img src={logo} alt="icon" className=""/>
        <div className="">
          <h2 className="text-2xl text-Neutral-0">{name}</h2>
          <p className="text-Neutral-300">{description}</p>
        </div>
      </div>
      <div className="flex justify-between mt-10">
        <button className="border border-Neutral-0 rounded-3xl p-2 text-xs text-Neutral-0">Remove</button>
        <input type="checkbox" className=""/>
      </div>
    </div>
  );
}

export default ExtensionCard;
