function SocialCard({ item, textColor, cardColor }) {
  return (
    <div className={`${item.background}`}>
      <div
        className={`${cardColor} translate-y-1  grid place-items-center py-6 rounded-xs`}
      >
        <div className="flex items-center gap-2">
          <img src={item.icon} alt="" className="object-cover " />
          <p className="text-Gray-400 text-xs">{item.username}</p>
        </div>
        <h2 className={`text-6xl ${textColor} font-bold mt-4`}>{item.count}</h2>

        <p className="text-Gray-400 tracking-[.35rem] text-xs mt-2 uppercase">
          {item.label}
        </p>
        <div className="flex items-center gap-1 mt-4">
          <img
            src={item.image}
            alt="icon"
            className="w-2 aspect-auto object-cover "
          />
          <p className={`${item.color} text-xs `}>{item.change} Today</p>
        </div>
      </div>
    </div>
  );
}

export default SocialCard;
