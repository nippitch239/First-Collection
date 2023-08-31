import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import style from "../styles/Register.module.css";
import { useUserAuth } from "../context/UserAuthContext";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState("");
  const { signUp } = useUserAuth();
  const [conPassword, setConPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !password || !displayName || !conPassword) {
      setError("Please enter all the required information.");
      return;
    }

    if (!email.endsWith("@tupp.ac.th")) {
      setError("Please use an email address from @tupp.ac.th");
      return;
    }

    if (conPassword !== password) {
      setError("Confirm Password was Invalid");
      return;
    }

    setError(""); // Clear any previous errors

    try {
      await signUp(email, password, displayName);
      navigate("/");
    } catch (err) {
      setError((err as Error).message);
      console.error(err);
    }
  };

  return (
    <div className={style.contain}>
      <div className={style.InsideContain}>
        <Form onSubmit={handleSubmit}>
          <p className={style.textHead}>Join us!</p>
          {error && <Alert variant="danger">{error}</Alert>}
          <div className={style.setBoxMargin}>
            <input
              type="text"
              placeholder="Username"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
            />
          </div>
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

          <div className={style.setBoxMargin}>
            <input
              type="password"
              placeholder="Confirm Password"
              value={conPassword}
              onChange={(e) => setConPassword(e.target.value)}
            />
          </div>

          <div className={style.Mainbutton}>
            <button className={style.button} type="submit">
              Sign Up
            </button>
          </div>
        </Form>

        <div className={style.test}>
          Already have an account? <Link to="/login">Log in</Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
