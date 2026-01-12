import { useParams, useNavigate } from "react-router-dom";
import { users } from "../data/users.js";

const UserDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const user = users.find((u) => u.id === Number(id));

  if (!user) {
    return <p>User not found</p>;
  }

  return (
    <div className="page">
      <h1>User Details</h1>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>

      <button onClick={() => navigate("/users")}>
        Go Back
      </button>
    </div>
  );
};

export default UserDetail;
