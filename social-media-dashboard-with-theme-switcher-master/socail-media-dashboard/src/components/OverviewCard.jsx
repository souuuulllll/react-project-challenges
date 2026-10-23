
function OverviewCard({item, textColor, cardColor}) {
  return (
    <div className={`${cardColor} grid p-6 rounded-sm`}>
      <div className="flex justify-between">
        <h2 className="text-Gray-650 font-bold">{item.metric}</h2>
        <img src={item.icon} alt="icon" className="w-6 aspect-auto"/>
      </div>
      <div className="flex justify-between mt-5">
        <h3 className={`text-3xl font-bold ${textColor}`}>{item.count}</h3>
        <div className="flex items-center gap-1">
          <img src={item.image} alt="icon" className="w-2 aspect-auto object-cover"/>
          <p className={`${item.color} text-xs`}>{item.change}%</p>
        </div>
      </div>
    </div>
  )
}

export default OverviewCard