import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { auth, provider } from "./firebase";

const Login = () => {
  const { user, setUser } = useContext(AuthContext);
  const handleLogin = () => {
    if (!user) {
      auth.signInWithPopup(provider).then((result) => {
        if (result) {
          setUser(result.user);
        }
      });
    }
  };
  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center flex-column "
      style={{ height: "100vh" }}
    >
      <h3>Login to contacts app</h3>

      <button onClick={handleLogin} className="btn btn-secondary shadow-none">
        <i className="bi bi-google"></i> Login with google
      </button>
    </div>
  );
};

export default Login;
