import styles from "./layout.module.css";
export const Layout = ({ children }) => {
  return (
    <main className={styles.main}>
      <header className={styles.header}></header>
      {children}
      <footer className={styles.footer}></footer>
    </main>
  );
};
