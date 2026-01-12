import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Welcome to User Management Application</h1>
      <p>
        This application demonstrates multi-page routing using React Router.
      </p>

      <div style={{ marginTop: "15px" }}>
        <Link to="/about">About</Link> |{" "}
        <Link to="/users">Users</Link>
      </div>
    </div>
  );
}

export default Home;
