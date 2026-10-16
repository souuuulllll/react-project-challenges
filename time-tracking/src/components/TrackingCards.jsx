import React from "react";
import data from "../data.json";
import TrackingCard from "./TrackingCard";

function TrackingCards({timeFrameState}) {
  return (
    <>
      {data.map((item, index) => {
        return (
          <React.Fragment key={index}>
            <TrackingCard item={item} timeFrameState={timeFrameState}/>
          </React.Fragment>
        );
      })}
    </>
  );
}

export default TrackingCards;
