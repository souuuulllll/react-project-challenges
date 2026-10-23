const lists = ["All" , "Active", "Inactive"]

function Tabs() {
  return (
    <div className="flex gap-2">
        {lists.map((list, index) => (
            <div className="text-Neutral-0 border border-Neutral-600 bg-Neutral-700 px-5 py-2 rounded-3xl" key={index}>{list}</div>
        ))}
    </div>
  )
}

export default Tabs