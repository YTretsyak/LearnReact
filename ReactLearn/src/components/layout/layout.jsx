export const Layout = ({ children }) => {
  return (
    <main style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <header style={{ backgroundColor: "lightgray", padding: "1rem" }}></header>
      {children}
      <footer style={{ backgroundColor: "lightgray", padding: "1rem", marginTop: "auto" }}></footer>
    </main>
  );
};