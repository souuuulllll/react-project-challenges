function Card({ cardData = {} }) {
  const {
    name = "",
    cardNumber = "",
    month = "",
    year = "",
    cvc = "",
  } = cardData;

  const displayName = name.trim() ? name.toUpperCase() : "JANE APPLESEED";
  const displayCardNumber = cardNumber.trim() ? cardNumber : "0000 0000 0000 0000";
  const displayExpDate = `${month.trim() ? month : "00"}/${year.trim() ? year : "00"}`;
  const displayCvc = cvc.trim() ? cvc : "000";

  return (
    <div className="relative h-60 bg-[url('/images/bg-main-mobile.png')] bg-cover bg-no-repeat lg:h-full lg:bg-[url('/images/bg-main-desktop.png')]">
      {/* Front of card */}
      <div className="absolute top-32 left-4 z-20 w-[min(285px,78%)] lg:top-[18%] lg:left-[48%] lg:w-[min(447px,28vw)] shadow-2xl rounded-xl">
        <img
          src="/images/bg-card-front.png"
          alt="Front of credit card"
          className="w-full drop-shadow-2xl"
        />
        <img
          src="/images/card-logo.svg"
          alt="Card brand logo"
          className="absolute top-5 left-5 w-12 lg:top-7 lg:left-7 lg:w-18"
        />
        <p className="absolute bottom-12 left-5 right-5 text-base tracking-[0.12em] text-White lg:bottom-16 lg:text-2xl lg:tracking-[0.18em] font-medium">
          {displayCardNumber}
        </p>
        <div className="absolute right-5 bottom-5 left-5 flex justify-between items-center text-[0.7rem] tracking-widest text-White uppercase lg:text-xs">
          <p className="truncate max-w-[70%]">{displayName}</p>
          <p>{displayExpDate}</p>
        </div>
      </div>

      {/* Back of card */}
      <div className="absolute top-8 right-4 z-10 w-[min(285px,78%)] lg:top-[52%] lg:right-auto lg:left-[62%] lg:w-[min(447px,28vw)] shadow-2xl rounded-xl">
        <img
          src="/images/bg-card-back.png"
          alt="Back of credit card"
          className="w-full drop-shadow-2xl"
        />
        <p className="absolute top-[43%] right-[12%] text-xs tracking-widest text-White lg:text-sm font-medium">
          {displayCvc}
        </p>
      </div>
    </div>
  );
}

export default Card;
