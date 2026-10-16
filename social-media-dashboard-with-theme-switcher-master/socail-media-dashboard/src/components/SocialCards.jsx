import SocialCard from "./SocialCard";
import data from "../data.json";

function SocialCards() {
  return (
    <>
      {data.followerCards.map((item) => (
        <SocialCard key={item.id} item={item} />
      ))}
    </>
  );
}

export default SocialCards