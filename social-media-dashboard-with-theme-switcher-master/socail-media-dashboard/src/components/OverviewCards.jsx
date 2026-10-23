import data from "../data.json";
import OverviewCard from "./OverviewCard";

function OverviewCards({textColor, cardColor}) {
  return (
    <>
      {data.cards.map((item) => (
        <OverviewCard key={item.id} item={item} textColor={textColor} cardColor={cardColor}/>
      ))}
    </>
  )
}

export default OverviewCards