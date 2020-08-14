import React from "react";
import "./App.css";
import NavBar from "./components/navbar";
import About from "./components/about";
import Projects from "./components/projects";
import Team from "./components/Team"
import Contact from "./components/contact"
function App() {
  const [darkTheme, setDarkTheme] = React.useState(true);

  //Used to toggle the value of darkTheme when the button is pressed.
  function handleClick() {
    setDarkTheme(!darkTheme);
  }

  return (
    <div className={darkTheme ? "dark-theme" : "light-theme"}>

      {/* Value of darkTheme is passed in order to dynamically change the Button Text */}
      <NavBar onClick={handleClick} darkTheme={darkTheme}/>
      <div className="app">
        <About />
        <Projects />
        <Team/>
        <Contact/>
      </div>
    </div>
  );
}
export default App;
