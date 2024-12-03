import React from "react";
// import { ThemeProvider, useTheme } from "./contexts/ThemeContext";
import Layout from "./components/Layout";
import "./i18n"; // Importa o arquivo de configuração do i18n

const App: React.FC = () => {
  // const { theme, toggleTheme } = useTheme();

  return <Layout />;
};

export default App;

{
  /* <button onClick={toggleTheme}>Toggle Theme</button>
      <h1>Current Theme: {theme}</h1> */
}
