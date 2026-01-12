import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="page">
      <h1>About This App</h1>
      <p>
        This app is built using React Router to demonstrate multi-page
        navigation and dynamic routing.
      </p>

      <Link to="/">Go Back Home</Link>
    </div>
  );
};

export default About;
