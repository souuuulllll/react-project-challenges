import data from "../data.json";
import OverviewCard from "./OverviewCard";

function OverviewCards() {
  return (
    <>
      {data.cards.map((item) => (
        <OverviewCard key={item.id} item={item} />
      ))}
    </>
  )
}

export default OverviewCards