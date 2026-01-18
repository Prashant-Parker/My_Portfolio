import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  // initial theme: localStorage -> system preference -> default dark
  const getInitialTheme = () => {
    if (typeof window === "undefined") return "dark";
    const saved = localStorage.getItem("theme");
    if (saved === "dark" || saved === "light") return saved;
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDark ? "dark" : "light";
  };

  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    if (typeof document === "undefined") return;
    const html = document.documentElement;
    html.classList.remove("dark", "light");
    html.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <ThemeContext.Provider
      value={{ theme, dark: theme === "dark", toggleTheme, setTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
