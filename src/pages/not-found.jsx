import { Link } from "react-router";

const NotFoundPage = () => {
  const style = {
    container: {
      textAlign: "center",
      padding: "80px 20px ",
      color: "#fff",
    },
    title: {
      fontSize: "72px",
      marginBottom: "20px",
    },
    messages: {
      fontSize: "18px",
      marginBottom: "30px",
    },
    link: {
      textDecoration: "none",
      fontWeight: "bold",
      color: "#007bff",
    },
  };

  return (
    <div style={style.container}>
      <h1 style={style.title}>404</h1>
      <p>Oops! The page you're looking for does not exist.</p>
      <Link to="/" style={style.link}>
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
