import ExtensionCard from "./ExtensionCard";
import data from "../data.json";
function ExtensionCards() {
  return (
    <>
    {data.map((item, index) =>(
      <ExtensionCard item={item} key={index}/>
    ))}
    </>
  )
}

export default ExtensionCards