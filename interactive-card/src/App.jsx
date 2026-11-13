import { useState } from "react";
import Card from "./components/Card";
import InputForm from "./components/InputForm";


const initialCardData = {
  name: "",
  cardNumber: "",
  month: "",
  year: "",
  cvc: "",
};

function App() {
  const [cardData, setCardData] = useState(initialCardData);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleReset = () => {
    setCardData(initialCardData);
    setIsConfirmed(false);
  };

  return (
    <main className="min-h-screen bg-White lg:grid lg:h-screen lg:grid-cols-[38%_62%]">
      <Card cardData={cardData} />

      <div className="grid place-items-center px-6 pt-24 pb-12 lg:px-8 lg:pt-0">
        <InputForm
          cardData={cardData}
          setCardData={setCardData}
          isConfirmed={isConfirmed}
          setIsConfirmed={setIsConfirmed}
          onReset={handleReset}
        />
      </div>
    
    </main>
  );
}

export default App;
