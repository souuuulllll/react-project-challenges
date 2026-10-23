import ThemeSwitch from "./ThemeSwitch"


function NavBar() {
  return (
    
        <div className="bg-Neutral-700 opacity-90 flex justify-between p-3 rounded-2xl">
            <img src="/images/logo-light.svg" alt="icon" className="w-35" />
          
          <ThemeSwitch/>
        </div>
    
  )
}

export default NavBar