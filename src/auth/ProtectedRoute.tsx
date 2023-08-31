import { Navigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

// Define the type for the 'children' prop
type ProtectedRouteProps = {
  children: React.ReactNode;
};

function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { user } = useUserAuth();

  if (!user) {
    return <Navigate to="/" />;
  }

  return children;
}

export default ProtectedRoute;
