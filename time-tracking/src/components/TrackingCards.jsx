import React from "react";
import data from "../data.json";
import TrackingCard from "./TrackingCard";

function TrackingCards() {
  return (
    <>
      {data.map((item, index) => {
        return (
          <React.Fragment key={index} className="">
            <TrackingCard />
          </React.Fragment>
        );
      })}
    </>
  );
}

export default TrackingCards;
