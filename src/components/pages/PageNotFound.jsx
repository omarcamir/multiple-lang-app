import { Link } from "react-router-dom";

const PageNotFound = () => {
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      textAlign: "center",
      backgroundColor: "#f8f9fa",
      color: "#343a40",
    },
    header: {
      fontSize: "2rem",
      marginBottom: "10px",
    },
    link: {
      color: "#007bff",
      textDecoration: "none",
      fontSize: "1.2rem",
    },
  };
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>404 - Page Not Found</h1>
      <Link to="/" style={styles.link}>
        Go back to Home
      </Link>
    </div>
  );
};

export default PageNotFound;
