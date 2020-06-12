import React from "react";
import "./App.css";
import NavBar from "./components/navbar";
import About from "./components/about";
import Projects from "./components/projects";
import Team from "./components/Team"
function App() {
  const [darkTheme, setDarkTheme] = React.useState(true);
  return (
    <div className={darkTheme ? "dark-theme" : "light-theme"}>
      <nav>
        <NavBar />
        <button onClick={() => setDarkTheme((prevTheme) => !prevTheme)}>
          {darkTheme ? "Light" : "Dark"}
        </button>
      </nav>
      <div className="app">
        <About />
        <Projects />
        <Team/>
      </div>
    </div>
  );
}
export default App;
