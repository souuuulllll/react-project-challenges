import React from "react";

const timeframeOptions = [
  { id: 1, label: "Daily" },
  { id: 2, label: "Weekly" },
  { id: 3, label: "Monthly" },
];
function Profile({ timeFrameState, setTimeFrameState}) {
  return (
    <div className="md:row-span-2 bg-Navy-900 rounded-xl  overflow-hidden">
      <div className="bg-Purple-600 rounded-xl h-[70%] p-5">
        <img
          src="/images/image-jeremy.png"
          alt="img"
          className="w-12 object-cover border-2 rounded-full border-white"
        />
        <p className="text-xs text-Navy-200 mt-8">Report for </p>
        <h3 className="md:text-3xl text-xl text-white font-light">Jeremy Robson</h3>
      </div>
      <ul className="md:grid flex gap-3 p-5">
        {timeframeOptions.map((option) => {
            const isActive = timeFrameState === option.label;
            const textColor = isActive? "text-white" : "text-Navy-200";
          return (
            <React.Fragment key={option.id}>
                <li
              className={`${textColor} text-xs cursor-pointer`}
              
              onClick={() => setTimeFrameState(option.label)}
            >
              {option.label}
            </li>
            </React.Fragment>
            
          );
        })}
      </ul>
    </div>
  );
}

export default Profile;
