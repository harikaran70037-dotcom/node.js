export default function NotFound() {
  return (
    <div style={styles.container}>

      <div style={styles.warning}>
        ⚠ Warning
      </div>

      <h1 style={styles.code}>404</h1>

      <h2>Page Not Found</h2>

      <p>
        The page you are looking for does not exist.
      </p>

      <a href="/" style={styles.button}>
        Go Back Home
      </a>

    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    background: "#111",
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
  },

  warning: {
    background: "red",
    padding: "10px 25px",
    borderRadius: "10px",
    fontSize: "20px",
    fontWeight: "bold",
  },

  code: {
    fontSize: "120px",
    color: "orange",
    margin: 0,
  },

  button: {
    padding: "12px 25px",
    background: "orange",
    color: "white",
    textDecoration: "none",
    borderRadius: "8px",
  },
};