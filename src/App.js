import React, { useContext, useState } from "react";
import Header from "./components/header/header";
import Login from "./components/Login";
import { AuthContext, AuthProvider } from "./contexts/AuthContext";

const App = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <>
      <Header user={user} />
      {!user ? <Login /> : <></>}
    </>
  );
};

export default App;
