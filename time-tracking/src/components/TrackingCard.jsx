
function TrackingCard({item, timeFrameState }) {
  const {title, timeframes, image, color} = item;
  const lowercase = timeFrameState.toLowerCase();
  const time = lowercase === "weekly" ? "Week" : lowercase === "daily" ? "Day" : "Month";
  
  return (
    <div className={`${color} relative overflow-hidden rounded-xl`}>
      <img className="w-18 object-cover absolute -top-2 right-4" src={image} alt="img" />
      <div className="bg-Navy-900 border rounded-xl h-[80%] absolute bottom-0 w-full p-6">
        <div className="flex justify-between items-center">
          <h3 className="text-white">{title}</h3>
          <img className="w-2 h-1 object-contain" src="/images/icon-ellipsis.svg" alt="img" />
        </div>
        <div className="mt-4 grid gap-2">
        <h2 className="text-white text-4xl font-light">{timeframes[lowercase]?.current}hr</h2>
        <p className="text-Navy-200 text-xs font-light">Last {time}-{timeframes[lowercase]?.previous}hr</p>
        </div>
      </div>
    </div>
  )
}

export default TrackingCard
