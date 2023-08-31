// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import style from "./styles/App.module.css";
import { Link } from "react-router-dom";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div className={style.contain}>
        <div className={style.containMain}>
          <p className={style.param}>
            Welcome! Please let me know <br />
            how i'can help.
          </p>
          {/* <input type="text" className={style.inputBox} /> */}

          <Link to="/login" type="button" className={style.buttonOne}>
            Login
          </Link>

          <div className={style.and}>
            <div className={style.firstline}></div>
            <p className={style.paramTwo}>and</p>
            <div className={style.firstline}></div>
          </div>

          <div className={style.signin}>
            <p className={style.paramThree}>Doesn't has accout yet :</p>
            <Link to="/register" className={style.paramSignin}>
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
