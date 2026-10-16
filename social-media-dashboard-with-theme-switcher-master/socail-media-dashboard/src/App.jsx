import Cards from "./components/SocialCards";
import OverviewCards from "./components/OverviewCards";

function App() {
  return (
    <>
      <div className="bg-Gray-950 min-h-screen grid place-items-center">
        <div className="max-w-4xl ">

          <div className="grid grid-cols-4 gap-2">
            <div className="">
              <h2>Social Media Dashboard</h2>
              <p>Total Folloers: 23,004</p>
            </div>
            <div className="">
              <p>Dark Mode</p>
            </div>
          </div>
          <Cards/>

          <h3>Overview - Today</h3>
          <OverviewCards/>

        </div>
      </div>
    </>
  );
}

export default App;
