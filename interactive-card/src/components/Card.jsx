function Card() {
  return (
    <div className="relative h-60 bg-[url('/images/bg-main-mobile.png')] bg-cover bg-no-repeat lg:h-full lg:bg-[url('/images/bg-main-desktop.png')]">
      <div className="absolute top-32 left-4 z-20 w-[min(285px,78%)] lg:top-[18%] lg:left-[48%] lg:w-[min(420px,28vw)]">
        <img src="/images/bg-card-front.png" alt="Front of card" className="w-full drop-shadow-2xl" />
        <img
          src="/images/card-logo.svg"
          alt=""
          className="absolute top-5 left-5 w-12 lg:top-7 lg:left-7 lg:w-16"
        />
        <p className="absolute bottom-12 left-5 right-5 text-base tracking-[0.12em] text-White lg:bottom-16 lg:text-2xl lg:tracking-[0.18em]">
          0000 0000 0000 0000
        </p>
        <div className="absolute right-5 bottom-5 left-5 flex justify-between text-[0.7rem] tracking-widest text-White uppercase lg:text-xs">
          <p>Jane Appleseed</p>
          <p>00/00</p>
        </div>
      </div>

      <div className="absolute top-8 right-4 z-10 w-[min(285px,78%)] lg:top-[52%] lg:right-auto lg:left-[62%] lg:w-[min(420px,28vw)]">
        <img src="/images/bg-card-back.png" alt="Back of card" className="w-full drop-shadow-2xl" />
        <p className="absolute top-[43%] right-[12%] text-xs tracking-widest text-White lg:text-sm">
          000
        </p>
      </div>
    </div>
  );
}

export default Card;
