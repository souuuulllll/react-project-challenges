const lists = ["All", "Active", "Inactive"];

function Tabs({ textColor, cardColor, setTabMode}) {
  return (
    <div className="flex gap-2">
      {lists.map((list, index) => {
        
        return (
          <div
            className={`${textColor} border border-Neutral-600  px-5 py-2 rounded-3xl ${cardColor}`}
            key={index} onClick={() => setTabMode(list) }
          >
            {list}
          </div>
        );
      })}
    </div>
  );
}

export default Tabs;
