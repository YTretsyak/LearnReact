import { useState } from "react";
import { ThemeContext } from ".";

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  return <ThemeContext value={{ theme, setTheme }}>{children}</ThemeContext>;
};
