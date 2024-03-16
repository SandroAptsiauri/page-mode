import React from "react";
import useLocalStorage from "./hooks/useLocalStorage";
import useWindowResize from "./hooks/useWindowSize";

function App() {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);
  const { width } = useWindowResize();
  const isDesktop = width >= 768;

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  React.useEffect(() => {
    if (!isDesktop) {
      setDarkMode(false);
    }
  }, [isDesktop, setDarkMode]);

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <header>
        <h1>Toggle Theme</h1>
        <button onClick={toggleDarkMode}>Toggle Theme</button>
      </header>
    </div>
  );
}

export default App;
