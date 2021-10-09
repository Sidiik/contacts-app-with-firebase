import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import ContactItem from "./ContactItem";
import NewContact from "./NewContact";

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
    <div className="contaner-fluid mt-5">
      <NewContact />
      <div className="actions mt-4  d-flex justify-content-between align-items-center p-2">
        <h3 className="text-center text-primary ">Contacts List</h3>
      </div>
      {contactInfo.map((user) => (
        <ContactItem user={user} />
      ))}
    </div>
  );
};

export default ContactsList;
