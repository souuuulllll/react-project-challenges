import { useState } from "react";
import Card from "./components/Card";
import InputForm from "./components/InputForm";

function App() {
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); 
    setIsConfirmed(true);
  };
  return (
    <div className="min-h-screen bg-White lg:grid lg:h-screen lg:grid-cols-[38%_62%]">
      <Card />

      <div className="grid place-items-center px-6 pt-24 pb-12 lg:px-8 lg:pt-0">
        <InputForm isConfirmed={isConfirmed} setIsConfirmed={setIsConfirmed} handleSubmit={handleSubmit}/>
      </div>
    </div>
  );
}

export default App;
