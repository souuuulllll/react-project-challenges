
function SocialCard({ item }) {
  return (
    <div>
      <img src={item.icon} alt="" />
      <p>{item.username}</p>
      <h2>{item.count}</h2>
      <p>{item.label}</p>
      <p>
        <img src="/images/icon-up.svg" alt="icon" />{item.change} Today
      </p>
    </div>
  );
}

export default SocialCard