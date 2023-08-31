import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";
import style from "../styles/Login.module.css";

// Define an interface for the user authentication context
interface UserAuthContextType {
  logIn: (email: string, password: string) => Promise<void>;
  // Add other properties or methods if they exist in your context
}

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Specify the type of the returned value from useUserAuth
  const { logIn }: UserAuthContextType = useUserAuth() as UserAuthContextType;
  const navigate = useNavigate();

 const handleSubmit = async (e: React.FormEvent) => {
   if (!email || !password) {
     setError("Please enter both email and password");
     return;
   }

   e.preventDefault();
   setError(""); // Clear the error message
   try {
     await logIn(email, password);
     navigate("/home");
   } catch (err) {
     setError((err as Error).message); // Use type assertion here
     console.log(err);
   }
 };

  return (
    <div className={style.contain}>
      <div className={style.InsideContain}>
        <Form onSubmit={handleSubmit}>
          <p className={style.textHead}>Let's continue!</p>
          {error && <Alert variant="danger">{error}</Alert>}
          <div className={style.setBoxMargin}>
            <input
              type="email"
              placeholder="Email address @tupp.ac.th"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className={style.setBoxMargin}>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className={style.Mainbutton}>
            <button className={style.button} type="submit">
              Login
            </button>
          </div>
        </Form>
        <div className={style.test}>
          Don't have an account yet? <Link to="/register">Join Us!</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
