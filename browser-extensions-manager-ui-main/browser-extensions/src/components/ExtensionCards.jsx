import ExtensionCard from "./ExtensionCard";

function ExtensionCards({textColor, cardColor, filteredExtensions}) {
  return (
    <>
    {filteredExtensions.map((item, index) =>(
      <ExtensionCard item={item} key={index} textColor={textColor} cardColor={cardColor} />
    ))}
    </>
  )
}

export default ExtensionCards