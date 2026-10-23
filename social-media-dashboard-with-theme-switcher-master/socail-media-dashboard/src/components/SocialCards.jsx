import SocialCard from "./SocialCard";
import data from "../data.json";

function SocialCards({textColor, cardColor}) {
  return (
    <>
      {data.followerCards.map((item) => (
        <SocialCard key={item.id} item={item} textColor={textColor} cardColor={cardColor} />
      ))}
    </>
  );
}

export default SocialCards