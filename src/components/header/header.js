import React, { useState } from "react";
import { useContext } from "react/cjs/react.development";
import { AuthContext } from "../../contexts/AuthContext";
import { auth } from "../firebase";

const Header = () => {
  const { user, setUser } = useContext(AuthContext);
  const [img, setImg] = useState("");

  const logOut = () => {
    auth.signOut();
    setUser();
  };
  return (
    <div className="bg-dark text-light d-flex justify-content-between align-items-center p-2 ">
      <h4>Contacts app</h4>
      <div>
        <img
          className="rounded-circle"
          style={{ width: "22%" }}
          src={user && user._delegate.photoURL}
          alt=""
        />
        {user && (
          <button className="btn btn-danger m-2 shadow-none" onClick={logOut}>
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
