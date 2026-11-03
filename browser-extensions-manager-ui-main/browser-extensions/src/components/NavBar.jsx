import ThemeSwitch from "./ThemeSwitch"


function NavBar({themeMode,setThemeMode}) {
  const logoColor = themeMode ? "/images/logo-light.svg" : "/images/logo.svg";
  const navBg = themeMode ? "bg-Neutral-700" : "bg-Neutral-0" ;
  return (
    
        <div className={`${navBg} border border-Neutral-700 opacity-90 flex justify-between p-3 rounded-2xl`}>
            <img src={`${logoColor}`} alt="icon" className="w-35" />
          
          <ThemeSwitch setThemeMode={setThemeMode} themeMode={themeMode}/>
        </div>
    
  )
}

export default NavBar