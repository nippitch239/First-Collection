import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import { Button } from "react-bootstrap";

// Define a type alias for the user authentication context
type UserAuthContext = {
  logOut: () => Promise<void>;
  user: {
    email: string;
    displayName: string;
    // Add other properties as needed
  };
};

function Home() {
  const { logOut, user } = useUserAuth() as UserAuthContext;

  console.log("User:", user);

  const navigate = useNavigate();

 const handleLogout = async () => {
   try {
     await logOut();
     navigate("/");
   } catch (err) {
     console.log((err as Error).message); // Type assertion here
   }
 };

  return (
    <div>
      <h2>Welcome to the home page</h2>
      <p>Hi, {user?.email}</p>
      <p>Hi, {user?.displayName}</p>
      <Button onClick={handleLogout} variant="danger">
        Logout
      </Button>
    </div>
  );
}

export default Home;
