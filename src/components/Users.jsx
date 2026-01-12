import { Link,useNavigate } from "react-router-dom";
import { users } from "../data/users.js";

const Users = () => {
  const navigate = useNavigate();
    
  return (
    <div className="page">
      <h1>Users List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>
              {user.name}
            </Link>
          </li>
        ))}
      </ul>
      <button onClick={() => navigate("/")}>
        Go Back
      </button>


    </div>
  );
};

export default Users;
