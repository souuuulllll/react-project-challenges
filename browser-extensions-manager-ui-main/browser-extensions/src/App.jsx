import { useState } from "react";
import ExtensionCards from "./components/ExtensionCards";

import NavBar from "./components/NavBar";
import Tabs from "./components/Tabs";
import extensions from "./data.json";

function App() {
  const [themeMode, setThemeMode] = useState(true);
  const [tabMode, setTabMode] = useState("All");
 

  const bgColor = themeMode ? "bg-Neutral-900" :  "bg-Neutral-0";
  const textColor = themeMode ? "text-Neutral-0" : "text-Neutral-900";
  const cardColor = themeMode ? "bg-Neutral-700" : "bg-Neutral-100";

  const filteredExtensions = extensions.filter((ext) => {
    if (tabMode === "Active") return ext.isActive;
    if ( tabMode === "Inactive") return !ext.isActive;
    return true;
  });

  return (
    <>
      <div className={`${bgColor} min-h-screen grid place-items-center`}>
        <div className=" md:max-w-6xl p-10 mt-2">
          <NavBar themeMode={themeMode} setThemeMode={setThemeMode} />
          <div className="md:flex grid place-items-center gap-2 md:justify-between mt-6 md:mt-12">
            <p className={`${textColor} text-3xl font-bold`}>Extensions List</p>
            <Tabs
              textColor={textColor}
              cardColor={cardColor}
              tabMode={tabMode}
              setTabMode={setTabMode}
             
            />
          </div>
          <div className="grid md:grid-cols-3 gap-2">
            <ExtensionCards
              textColor={textColor}
              cardColor={cardColor}
              filteredExtensions={filteredExtensions}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
