import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import ContactItem from "./ContactItem";

const ContactsList = () => {
  const [contactInfo, setContactInfo] = useState([]);
  useEffect(() => {
    db.collection("contacts").onSnapshot((snapshot) => {
      setContactInfo(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          info: doc.data(),
        }))
      );
    });
  }, []);
  console.log(contactInfo);
  return (
    <div className="contaner-fluid mt-3">
      <div className="actions d-flex justify-content-between align-items-center p-3">
        <h3 className="text-center text-primary">Contacts List</h3>
        <button className="btn btn-primary shadow-none">Add one</button>
      </div>
      {contactInfo.map((user) => (
        <ContactItem key={user.id} user={user} />
      ))}
    </div>
  );
};

export default ContactsList;
