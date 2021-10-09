import React, { useContext, useState } from "react";
import Header from "./components/header/header";
import Login from "./components/Login";
import { AuthContext, AuthProvider } from "./contexts/AuthContext";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import ContactsList from "./components/Contacts/ContactsList";

const App = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
      <Header />
      {user ? <ContactsList /> : <Login />}
      <Router>
        <Switch>
          <Route path="/new" component={Login} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
