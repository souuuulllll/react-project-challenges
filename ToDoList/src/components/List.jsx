import { CircleCheck, Clock3 } from "lucide-react";
const lists = [
  {
    id: 1,
    icon: <Clock3  size={20} color="#6a7282" />,
    color: "bg-gray-200",
    title: "To do",
    count: 2,
  },
  {
    id: 2,
    icon: <CircleCheck color="#56947a" size={20} />,
    color: "bg-green-100",
    title: "Done",
    count: 1,
  },
];
function List() {
  return (
    <div className="grid grid-cols-2 p-4 gap-6">
      {lists.map((list) => (
        <div className="border grid place-items-center gap-1.5 border-gray-300 p-4">
        <div className={`${list.color} p-1.5 rounded-2xl`}>{list.icon}</div>
          <h2 className="text-gray-500 text-md">{list.title}</h2>
          <p className="text-xl font-semibold">{list.count}</p>
        </div>
      ))}
    </div>
  );
}

export default List;
