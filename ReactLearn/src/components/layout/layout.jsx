import styles from "./layout.module.css";
import { useContext } from "react";
import { ThemeContext } from "../themeProvider/index";

export const Layout = ({ children }) => {
  const themeContext = useContext(ThemeContext);
  return (
    <main className={styles.main}>
      <header
        className={styles.header + " " + styles[themeContext.theme]}
      ></header>
      {children}
      <footer
        className={styles.footer + " " + styles[themeContext.theme]}
      ></footer>
    </main>
  );
};
