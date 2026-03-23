import { useCallback } from "react";
import styles from "./toggleThemeButton.module.css";
import { useContext } from "react";
import { ThemeContext } from "../themeProvider/index";

export const ToggleThemeButton = () => {
    const themeContext = useContext(ThemeContext);

    const toggleTheme = useCallback(() => {
        themeContext.setTheme(themeContext.theme === "dark" ? "light" : "dark");
    }, [themeContext]);

    return (
        <button className={styles.themeButton + ' ' + styles[themeContext.theme]} onClick={toggleTheme}>
            Toggle Theme
        </button>
    );
}