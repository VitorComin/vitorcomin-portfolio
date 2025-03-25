import React, { createContext, useContext, useState, useEffect } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>("light");
  const [firstRender, setFirstRender] = useState(true);

  useEffect(() => {
    setTimeout(() => setFirstRender(false), 300);
  }, []);

  useEffect(() => {
    const darkStyleSheet = document.getElementById(
      "dark-theme-stylesheet"
    ) as HTMLLinkElement;

    if (darkStyleSheet) {
      if (theme === "dark") {
        darkStyleSheet.disabled = false;
      } else {
        darkStyleSheet.disabled = true;
      }
    }
  }, [theme]);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";

    setTheme(nextTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {firstRender ? null : children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
