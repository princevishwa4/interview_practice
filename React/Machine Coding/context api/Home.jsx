import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Home() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const styles = {
    background: theme === "light" ? "#fff" : "#333",
    color: theme === "light" ? "#000" : "#fff",
    height: "100vh",
    padding: "20px"
  };

  return (
    <div style={styles}>
      <h1>{theme} mode</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default Home;